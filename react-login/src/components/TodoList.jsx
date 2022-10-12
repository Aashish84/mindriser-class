import React from "react";
import { ACTIONS } from "./Todo";

export default function TodoList({ todo, dispatch }) {
  function handleToggle() {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } });
  }

  function handleDelete() {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
  }

  return (
    <li className="m-2">
      <span
        className={
          todo.complete ? "text-decoration-line-through " : "text-primary"
        }
      >
        {todo.name}
      </span>
      <button type="button" onClick={handleToggle} className="m-2">
        toggle
      </button>
      <button type="button" onClick={handleDelete} className="m-2">
        Delete
      </button>
    </li>
  );
}
