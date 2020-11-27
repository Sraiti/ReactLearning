import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { Link } from "react-router-dom";

import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import Banner from "./banner";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import SearchBox from "./searchBox";

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    pageSize: 4,
    selectedItem: "all",
    currentPage: 1,
    searchQuery: "",
    selectedGroup: { id: 0, name: "all" },
    sortColumn: { path: "title", order: "asc" },
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      movies,
      length,
      pageSize,
      currentPage,
      sortColumn,
      searchQuery,
    } = this.getPagedData();

    if (length <= 0) {
      return (
        <div className="alert alert-primary m-2 p-2">
          There's no movies in the database
        </div>
      );
    }

    return (
      <React.Fragment>
        <Banner data={count} />
        <div className="row">
          <div className="col-3">
            <ListGroup
              groups={this.state.genres}
              selectedItem={this.state.selectedItem}
              selectedGroup={this.state.selectedGroup}
              onGroupSelect={this.handelGroupChanged}
            />
          </div>
          <div className="col">
            <Link
              to="/movies/new"
              className="btn btn-primary"
              style={{ marginBottom: 20 }}
            >
              New Movie
            </Link>
            <SearchBox onChange={this.handelSearch} value={searchQuery} />
            <MoviesTable
              data={movies}
              onSort={this.handleSort}
              sortColumn={sortColumn}
              onLike={this.handleLike}
            />
            <Pagination
              itemsCount={length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChanged={this.handelPageChanged}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  getPagedData = () => {
    const {
      movies: allMovies,
      currentPage,
      pageSize,
      selectedGroup,
      sortColumn,
      searchQuery,
    } = this.state;
    let filtered = allMovies;

    if (searchQuery) {
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else {
      filtered =
        selectedGroup.name !== "all"
          ? allMovies.filter((m) => m.genre._id === selectedGroup._id)
          : allMovies;
    }

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return {
      length: filtered.length,
      movies,
      pageSize,
      currentPage,
      sortColumn,
    };
  };
  handelSearch = (value) => {
    this.setState({
      searchQuery: value,
      selectedGroup: { name: "all", id: 0 },
      currentPage: 1,
    });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handelGroupChanged = (group) => {
    this.setState({ selectedGroup: group, currentPage: 1 });
  };
  handelPageChanged = (page) => {
    this.setState({ currentPage: page });
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
}

export default Movies;
