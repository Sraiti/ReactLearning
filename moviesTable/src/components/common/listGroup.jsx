import React from "react";

const ListGroup = ({
  groups,
  textProperty,
  valueProperty,
  selectedGroup,
  onGroupSelect,
}) => {
  return (
    <ul className="list-group">
      <li
        className={
          selectedGroup.name === "all"
            ? "list-group-item active"
            : "list-group-item"
        }
        onClick={() => onGroupSelect({ id: 0, name: "all" })}
      >
        All Genres
      </li>
      {groups.map((group) => {
        return (
          <li
            key={group[valueProperty]}
            className={
              selectedGroup.name === group[textProperty]
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onGroupSelect(group)}
          >
            {group[textProperty]}
          </li>
        );
      })}
    </ul>
  );
};
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default ListGroup;
