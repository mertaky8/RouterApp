import { Link, useLoaderData } from "react-router-dom";

interface UserAlbumParams {
  userId: string;
  id: number;
  title: string;
}

export const getAlbums = async ({
  params,
}: {
  params: { userId?: string };
}) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}/albums`
  );
  const albums = await response.json();

  return albums;
};

const Albums = () => {
  const albums = useLoaderData() as UserAlbumParams[];

  return (
    <>
      <div>
        <ul>
          {albums.map((album) => (
            <li key={album.id}>
              <Link to={`/users/${album.userId}/albums/${album.id}`}>
                {album.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Albums;
