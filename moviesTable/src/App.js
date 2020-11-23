import { Redirect, Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import NotFound from "./components/notFound";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";

import NavBar from "./components/navBar";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies" component={Movies} />
          <Route path="/notFound" component={NotFound} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/customers" component={Customers} />
          <Redirect from="/" to="/movies" exact />
          <Redirect to="/notFound" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
