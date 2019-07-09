import React, { useState, useContext } from "react";
import AppContext from "../AppContext";

function Form({ setTodos, todos }) {
  const xval = useContext(AppContext);
  const [todoText, setTodoText] = useState("");
  function addTodo(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: todoText,
        done: false
      }
    ]);
    setTodoText("");
  }

  return (
    <div>
      <form>
        <input
          className="addItem"
          onChange={e => setTodoText(e.target.value)}
          value={todoText}
          type="text"
          placeholder="Add toDo"
        />
        <input onClick={addTodo} type="submit" value="Add Todo" />
      </form>
    </div>
  );
}

export default Form;
