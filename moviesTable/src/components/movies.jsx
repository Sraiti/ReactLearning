import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  render() {
    if (this.state.movies.length <= 0) {
      return (
        <div className="alert alert-primary m-2 p-2">
          There's no movies in the database
        </div>
      );
    }
    return (
      <React.Fragment>
        <div className="alert alert-success m-2 p-2">
          There's
          <span className="font-weight-bold"> {this.state.movies.length} </span>
          movies in the database
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => this.TableElement(movie))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
  DeleteMovie = (movieId) => {
    deleteMovie(movieId);
    this.setState({ Movies: getMovies() });
  };
  TableElement = (movie) => {
    return (
      <tr key={movie._id}>
        <th scope="row">{movie._id}</th>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>{movie.title}</td>
        <td>
          <button
            className="btn-danger btn"
            onClick={() => this.DeleteMovie(movie._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };
}

export default Movies;
