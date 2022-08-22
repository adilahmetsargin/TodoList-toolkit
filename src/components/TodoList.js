import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggle,
  destroy,
  selectFilteredTodos,
} from "../redux/todos/todosSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectFilteredTodos);

  const handleDestroy = (id) => {
    if (window.confirm(`Are you sure you want to destroy`)) {
      dispatch(destroy(id));
    }
  };

  return (
    <ul className="todo-list">
      {filteredTodos.length > 0 &&
        filteredTodos.map((item) => (
          <li className={item.isCompleted ? "completed" : ""} key={item.id}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={item.isCompleted}
                onChange={() => {
                  dispatch(toggle({ id: item.id }));
                }}
              />
              <label>{item.title}</label>
              <button
                onClick={() => handleDestroy(item.id)}
                className="destroy"
              ></button>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
