import { Link, useLoaderData } from "react-router-dom";

interface UserDetailParams {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const detailLoader = async ({
  params,
}: {
  params: { userId?: string };
}) => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + params.userId
  );
  const details = await response.json();
  console.log(params);
  return details;
};

const UserDetails = () => {
  const details = useLoaderData() as UserDetailParams;

  return (
    <>
      <div className="details">
        <ul>
          <li key={details.id}>
            Username:
            {details.username} <br />
            Email:
            {details.email} <br />
            <Link to={`albums`}>Albums için tıklayınız.</Link>
            <br />
            <Link to={`posts`}>Posts için tıklayınız.</Link>
            <br />
            <Link to={`todos`}>Todos için tıklayınız.</Link>
            <br />
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserDetails;
