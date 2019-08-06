import React from "react";
import { Link } from "react-router-dom";

function Filter({ setActiveFilter }) {
  let DONE = "DONE";
  let TODO = "TODO";
  let ALL = "ALL";

  return (
    <div>
      <Link
        onClick={e => {
          setActiveFilter(ALL);
        }}
        to="/ "
      >
        {ALL}
      </Link>
      |
      <Link onClick={e => setActiveFilter(DONE)} to="/done">
        {DONE}
      </Link>
      |
      <Link onClick={e => setActiveFilter(TODO)} to="/todo">
        {TODO}
      </Link>
    </div>
  );
}
export default Filter;
