import { createBrowserRouter } from "react-router-dom";
import { Users, Roots, UserDetails, rootLoader } from "./pages";
import { detailLoader } from "./pages/UserDetails";
import { Albums, Posts, Todos } from "./user_info";
import { getAlbums } from "./user_info/Albums";
import { getPosts } from "./user_info/Posts";
import { getTodos } from "./user_info/Todos";
import PostDetails, { loaderPostDetails } from "./pages/PostDetails";
import AlbumDetails, { detailAlbums } from "./pages/AlbumDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        path: "users",
        children: [
          {
            index: true,
            element: <Users />,
            loader: rootLoader as any,
          },
          {
            path: ":userId",
            children: [
              {
                index: true,
                element: <UserDetails />,
                loader: detailLoader,
              },
              {
                path: "albums",

                children: [
                  {
                    index: true,
                    element: <Albums />,
                    loader: getAlbums,
                  },
                  {
                    path: ":albumId",
                    element: <AlbumDetails />,
                    loader: detailAlbums as any,
                  },
                ],
              },
              {
                path: "posts",
                children: [
                  {
                    index: true,
                    element: <Posts />,
                    loader: getPosts,
                  },
                  {
                    path: ":postId",
                    element: <PostDetails />,
                    loader: loaderPostDetails as any,
                  },
                ],
              },
              {
                path: "todos",
                element: <Todos />,
                loader: getTodos,
              },
            ],
          },
        ],
      },
      {
        path: "posts",
        element: <PostDetails />,
      },
    ],
  },
]);

export default router;
