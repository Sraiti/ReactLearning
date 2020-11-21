import React from "react";

const Banner = ({ data }) => {
  return (
    <div className="row">
      <div className="alert alert-success m-2 p-2 col">
        There's
        <span className="font-weight-bold"> {data} </span>
        movies in the database
      </div>
    </div>
  );
};

export default Banner;
