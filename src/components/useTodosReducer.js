import React, { useReducer } from "react";

function useTodosReducer(state, action) {
  switch (action.type) {
    case "SET_TODOS":
      return [...action.todos];
    case "TOGGLE_TODO":
      return [
        ...state.slice(0, action.index),
        { ...state[action.index], done: !state[action.index].done },
        ...state.slice(action.index + 1, state.length)
      ];
    case "ADD_TODO":
      return [...state, action.todo];
    case "DELETE_TODO":
      return state.filter((_, idx) => idx !== action.index);
    default:
      return state;
  }
}
export default useTodosReducer;
