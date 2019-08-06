import React from "react";

function TodoListItem({ todo, toggleTodo, deleteItem }) {
  let className = "menu";
  if (todo.done === true) {
    className += " strikethrough-active";
  }
  return (
    <>
      <input checked={todo.done} type="checkbox" onChange={toggleTodo} />
      <span className={className}>{todo.text}</span>
      <button onClick={deleteItem}>Delete</button>
    </>
  );
}

function TodoList({ todos, toggleTodo, deleteItem }) {
  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={todo.idTodo} className="items">
            <TodoListItem
              todo={todo}
              index={index}
              toggleTodo={() => {
                toggleTodo(todo.idTodo);
              }}
              deleteItem={() => {
                deleteItem(todo.idTodo);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
