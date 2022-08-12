import React from "react";
import { TodoType } from "../types/Todo.types";

interface Props {
  todo: TodoType;
  index: number;
  handleCompleted: (id: number) => void;
  handleDelete: (id: number) => void;
}

const Todo: React.FC<Props> = ({ todo, index, handleCompleted, handleDelete }) => {
  return (
    <div className="Todo">
      <div className="col-lg-4 mb-4 mx-auto">
        <div className="cards">
          <p style={{ textDecoration: todo.completed ? "line-through" : "" }}>
            {todo.title}
          </p>
          <button
            onClick={() => handleCompleted(index)}
            className={`btn ms-auto d-block ${
              todo.completed ? "btn-success" : "btn-dark"
            }`}
          >
            {todo.completed ? "Complete" : "Incomplete"}
          </button>

          <button
            onClick={() => handleDelete(index)}
            className={`btn ms-auto d-block btn-danger mt-2`}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
