import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import Todo from "./Todo";

const Todos = () => {
  const [todos, setTodos] = useState<Todos[]>([]);
  //   const [error, setError] = useState({});

  interface Todos {
    title: string;
    id: number;
    completed: boolean;
  }

  const handleCompleted = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDelete = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setTodos(res.data.slice(0, 20));
      } catch (err) {
        // setError(err)
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="Todos">
      <div className="container">
        <div className="row">
          {todos.length > 0 ? (
            todos.map((todo: Todos, index: number) => (
              <Todo
                index={index}
                handleCompleted={handleCompleted}
                todo={todo}
                key={todo.id}
                handleDelete={handleDelete}
              />
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default Todos;
