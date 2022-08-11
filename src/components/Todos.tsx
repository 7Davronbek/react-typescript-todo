import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState({});

  interface Todos {
    title: string;
    id: number;
    completed: boolean;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setTodos(res.data.slice(0, 10));
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
          <div className="col-12">
            { todos.length > 0 ? todos.map((todo: Todos) => (

              <p key={todo.id}><b>{todo.title}</b></p>

            )): (<Loader />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;