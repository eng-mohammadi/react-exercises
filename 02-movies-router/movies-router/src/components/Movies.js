import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchTerm: "",
      selectedGenre: "",
      error: "",
    };
  }

  componentDidMount() {
    axios
      .get("/data.json")
      .then((response) => {
        this.setState({ movies: response.data });
      })
      .catch(() => {
        this.setState({ error: "Could not load the movies list." });
      });
  }

  searchMovieHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  // Clicking the active genre again clears the filter
  filterByGenre = (genre) => {
    this.setState(({ selectedGenre }) => ({
      selectedGenre: selectedGenre === genre ? "" : genre,
    }));
  };

  getUniqueGenres() {
    const genres = this.state.movies.flatMap((movie) =>
      movie.Genre.split(",").map((genre) => genre.trim()),
    );
    return [...new Set(genres)];
  }

  // The list on screen is always derived from the state: search AND genre
  getVisibleMovies() {
    const { movies, searchTerm, selectedGenre } = this.state;
    const term = searchTerm.trim().toLowerCase();

    return movies.filter((movie) => {
      const matchesTitle = movie.Title.toLowerCase().includes(term);
      const matchesGenre =
        !selectedGenre ||
        movie.Genre.split(",")
          .map((genre) => genre.trim())
          .includes(selectedGenre);
      return matchesTitle && matchesGenre;
    });
  }

  render() {
    const { movies, searchTerm, selectedGenre, error } = this.state;
    const visibleMovies = this.getVisibleMovies();

    return (
      <React.Fragment>
        <div className="movies-container">
          <div className="movies-box">
            {error && <p className="movies-message">{error}</p>}
            {!error && movies.length > 0 && visibleMovies.length === 0 && (
              <p className="movies-message">No movies found.</p>
            )}
            {visibleMovies.map((movie) => (
              <Movie
                key={movie.Id}
                poster={movie.Poster}
                title={movie.Title}
                director={movie.Director}
                year={movie.Year}
                genre={movie.Genre}
              />
            ))}
          </div>
          <div className="movie-genres">
            <input
              type="text"
              name="search-movie"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={this.searchMovieHandler}
            />
            {this.getUniqueGenres().map((genre) => (
              <button
                key={genre}
                type="button"
                className={genre === selectedGenre ? "active" : ""}
                aria-pressed={genre === selectedGenre}
                onClick={() => this.filterByGenre(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
