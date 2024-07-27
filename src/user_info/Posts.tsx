import { Link, useLoaderData } from "react-router-dom";

interface postParams {
  userId: string;
  id: number;
  title: string;
  body: string;
}

export const getPosts = async ({ params }: { params: { userId?: string } }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}/posts`
  );
  const posts = await response.json();
  return posts;
};

const Posts = () => {
  const posts = useLoaderData() as postParams[];

  return (
    <>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/users/${post.userId}/posts/${post.userId}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Posts;
