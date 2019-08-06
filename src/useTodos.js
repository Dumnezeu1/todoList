import { useState, useEffect } from "react";

function useTodos() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  let DONE = "done";
  let TODO = "todo";
  let ALL = "all";
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
  function toggleTodo(id) {
    const newTodos = [...todos];
    const index = newTodos.findIndex(tod => tod.idTodo === id);
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }

  function deleteItem(id) {
    const newTodos = [...todos];
    const index = newTodos.findIndex(tod => tod.idTodo === id);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const todosToDisplay = filterTodos(activeFilter);

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
