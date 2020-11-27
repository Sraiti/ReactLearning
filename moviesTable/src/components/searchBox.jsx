import React from "react";

const SearchBox = ({ onChange, value }) => {
  return (
    <input
      className="form-control mr-sm-2"
      type="search"
      placeholder="Search..."
      value={value}
      aria-label="Search"
      style={{ marginBottom: 20 }}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
