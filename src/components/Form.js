import React, { useState } from "react";

function Form({ setTodos, todos }) {
  const [todoText, setTodoText] = useState("");

  const lastTodoId = Math.max(...todos.map(todo => todo.idTodo), 0); // com
  const [id, setId] = useState(lastTodoId + 1);
  function addTodo(e) {
    e.preventDefault();

    if (todoText.trim().length > 0) {
      setId(() => id + 1);
      setTodos([
        ...todos,
        {
          idTodo: id,
          text: todoText,
          done: false
        }
      ]);
    }
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
