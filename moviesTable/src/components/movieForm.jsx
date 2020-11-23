import React from "react";
const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>Movie Form</h1>

      <h3>{match.params.id}</h3>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => history.push("/")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
