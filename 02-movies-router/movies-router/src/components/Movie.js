import React, { Component } from "react";

class Movie extends Component {
  render() {
    const { poster, title, director, year, genre } = this.props;
    return (
      <React.Fragment>
        <div className="movie-card">
          <img src={poster} alt={title} />
          <h3>{title}</h3>
          <p>Director: {director}</p>
          <p>Year: {year}</p>
          <p>Genre: {genre}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Movie;
