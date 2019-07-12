import React, { useState } from "react";

function Form({ setTodos, todos }) {
  const [todoText, setTodoText] = useState("");
  function addTodo(e) {
    e.preventDefault();
    var found = todos.find(element => {
      console.log(todoText === element.text);
      return todoText === element.text;
    });
    console.log(found);
    if (todoText !== "" || found) {
      setTodos([
        ...todos,
        {
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
