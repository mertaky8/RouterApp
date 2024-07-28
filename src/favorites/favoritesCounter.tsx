import { useFavorites } from "../favorites/useFavorites";

const FavoritesCounter = () => {
  const photosCount = useFavorites((state) => state.photos.length); //photos arrayinin uzunluğuna göre fav olanları gösteren değişken

  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        top: "50px",
        right: "50px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        padding: "5px 10px",
        borderRadius: "5px",
        border: "solid 3px #ff0000",
      }}
    >
      <h3>Favorites: {photosCount}</h3>
    </div>
  );
};

export default FavoritesCounter;
