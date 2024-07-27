import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

interface todoParams {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
}

export const getTodos = async ({ params }: { params: { userId?: string } }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}/todos`
  );
  const todos = await response.json();
  return todos;
};

const Todos = () => {
  const todos = useLoaderData() as todoParams[];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <h2>Loading...</h2>
        </div>
      ) : (
        <div>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.completed ? "tamamlandı" : "tamamlanmadı"} <br /> <br />{" "}
                {todo.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Todos;
