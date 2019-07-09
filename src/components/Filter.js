import React from "react";

function Filter({ setActiveFilter }) {
  let DONE = "DONE";
  let TODO = "TODO";
  let ALL = "All";
  function onFilterClick(filter) {
    return function(e) {
      e.preventDefault();
      setActiveFilter(filter);
    };
  }
  return (
    <>
      <button onClick={onFilterClick(ALL)}>{ALL}</button>|
      <button onClick={onFilterClick(TODO)}>{TODO}</button>|
      <button onClick={onFilterClick(DONE)}>{DONE}</button>
    </>
  );
}
export default Filter;
