import create from "zustand";

interface Photo {
  albumId?: string;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  userId: number;
}

interface FavoritesState {
  photos: Photo[];
  addFavorite: (photo: Photo) => void;
}

export const useFavorites = create<FavoritesState>((set) => ({
  photos: [],
  addFavorite: (photo: Photo) =>
    set((state) => ({ photos: [...state.photos, photo] })),
}));
