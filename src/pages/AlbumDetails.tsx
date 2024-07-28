import { useLoaderData } from "react-router-dom";
import React from "react";
import { Button } from "react-bootstrap";
import { BiLike } from "react-icons/bi";
import { useFavorites } from "../favorites/useFavorites";

interface AlbumDetails {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  userId?: number;
}

export const detailAlbums = async ({
  params,
}: {
  params: {
    albumId: string;
  };
}) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${params.albumId}/photos`
  );
  const photos = (await response.json()) as AlbumDetails[];
  return photos;
};

const AlbumDetails = () => {
  const photos = useLoaderData() as AlbumDetails[];

  const addFavorite = useFavorites((state) => state.addFavorite);
  const removeFavorite = useFavorites((state) => state.removeFavorite);
  const isFavorite = useFavorites((state) => state.isFavorite);

  const handleToggleFavorite = (photo: AlbumDetails) => {
    const photoWithUserId = { ...photo, userId: photo.userId || 1 };
    if (isFavorite(photoWithUserId.id)) {
      removeFavorite(photoWithUserId);
    } else {
      addFavorite(photoWithUserId);
    }
  };

  return (
    <React.Fragment>
      <div>
        <ul>
          {photos?.map((photo) => (
            <li key={photo.id}>
              <h5>{photo.title}</h5>
              <img
                src={photo.url}
                alt={photo.title}
                style={{
                  display: "flex",
                  maxHeight: "100px",
                  maxWidth: "100px",
                }}
              />
              <Button
                variant="dark"
                style={{
                  background: "white",
                  marginTop: "10px",
                }}
                onClick={() => handleToggleFavorite(photo)}
              >
                <BiLike
                  style={{
                    color: "#000000",
                  }}
                />
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default AlbumDetails;
