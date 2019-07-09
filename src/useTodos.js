import { useState, useEffect } from "react";

function useTodos() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  let DONE = "DONE";
  let TODO = "TODO";
  let ALL = "All";
  const [activeFilter, setActiveFilter] = useState(ALL);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function filterTodos(filter) {
    switch (filter) {
      case DONE:
        return todos.filter(t => t.done === true);
      case TODO:
        return todos.filter(t => t.done === false);
      default:
        return todos;
    }
  }

  function toggleTodo(index) {
    setTodos([
      ...todos.slice(0, index),
      { ...todos[index], done: !todos[index].done },
      ...todos.slice(index + 1, todos.length)
    ]);
  }

  function deleteItem(index) {
    console.log(index);
    setTodos([
      ...todos.slice(0, index),
      ...todos.slice(index + 1, todos.length)
    ]);
  }

  const todosToDisplay = filterTodos(activeFilter);
  console.log(todos);

  return {
    todosToDisplay,
    toggleTodo,
    deleteItem,
    setActiveFilter,
    todos,
    setTodos
  };
}

export default useTodos;
