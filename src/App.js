import React from "react";
import useTodosWithFilter from "./useTodos";
import Form from "./components/Form";
import Filter from "./components/Filter";
import TodoList from "./components/TodoList";
import "./App.css";
// import AppContext from "./AppContext";
// import useTodosReducer from "./components/useTodosReducer";

function App() {
  const {
    todos,
    activeFilter,
    deleteItem,
    toggleTodo,
    setTodos,
    todosToDisplay,
    setActiveFilter
  } = useTodosWithFilter();

  return (
    <div className="todo-app">
      <Form setTodos={setTodos} todos={todos} />
      {<Filter setActiveFilter={setActiveFilter} />}
      {todos[0] ? (
        <p>
          Showing {activeFilter} ({todosToDisplay.length}:{""})
        </p>
      ) : null}
      <TodoList
        todos={todosToDisplay}
        toggleTodo={toggleTodo}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
