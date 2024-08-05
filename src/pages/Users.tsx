import { Link, useLoaderData } from "react-router-dom";

interface UserParams {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const rootLoader = async ({
  params,
}: {
  params: { userId: string };
}) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log(params);
  return users;
};

// type LoaderData = Awaited<ReturnType<typeof rootLoader>>;

const Users = () => {
  const users = useLoaderData() as UserParams[];

  return (
    <>
      <div className="users">
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {" "}
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Users;
