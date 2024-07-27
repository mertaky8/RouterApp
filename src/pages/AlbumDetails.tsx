import { useLoaderData } from "react-router-dom";
import React from "react";

interface AlbumDetails {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const detailAlbums = async ({
  params,
}: {
  params: {
    albumId: string; // Burada albüm ID'sini alıyoruz
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
                style={{ maxHeight: "100px", maxWidth: "100px" }}
              />
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default AlbumDetails;
