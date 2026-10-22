import React, { Component } from "react";
import "./styles/main-styles.scss";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import AboutUs from "./components/AboutUs";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="navbar-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
          </ul>
        </div>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;
