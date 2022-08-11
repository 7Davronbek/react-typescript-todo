import React from "react";
import { TodoType } from "../types/Todo.types";

interface Props {
  todo: TodoType;
  props1: true;
  props2: true;
}

const Todo: React.FC<Props> = ({ todo, props1, props2 }) => {
  return (
    <div className="Todo">
      <p>
        <b>{todo.title}</b>
      </p>
    </div>
  );
};

export default Todo;
