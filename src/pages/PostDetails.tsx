import { useLoaderData } from "react-router-dom";

interface postDetails {
  postId: string;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const loaderPostDetails = async ({
  params,
}: {
  params: { postId: string };
}) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/post/${params.postId}/comments`
  );
  const comments = (await response.json()) as postDetails[];
  return comments;
};

type Comments = Awaited<ReturnType<typeof loaderPostDetails>>;

const PostDetails = () => {
  const comments = useLoaderData() as Comments;

  return (
    <>
      <div>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}> {comment.body} </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PostDetails;
