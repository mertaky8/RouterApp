import { useFavorites } from "./useFavorites"; // useFavorites yerine useFavoritesStore

const FavoritesCounter = () => {
  const photosCount = useFavorites((state) => state.photos.length);

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
        boxShadow: "0 0 5px rgba(0,0,0,0.1)",
      }}
    >
      <h3>Favorites: {photosCount}</h3>
    </div>
  );
};

export default FavoritesCounter;
