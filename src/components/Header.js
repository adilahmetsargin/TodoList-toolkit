import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todosSlice";

const Header = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (!title) return;
    e.preventDefault();
    dispatch(addTodo({ title }));
    setTitle("");
  };

  return (
    <header>
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Header;
