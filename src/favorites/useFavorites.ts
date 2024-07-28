import { create } from "zustand";

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
  removeFavorite: (photo: Photo) => void;
  addFavorite: (photo: Photo) => void;
  isFavorite: (photoId: number) => boolean;
}

export const useFavorites = create<FavoritesState>((set, get) => ({
  photos: [],
  addFavorite: (photo: Photo) =>
    set((state) => ({ photos: [...state.photos, photo] })),
  removeFavorite: (photo: Photo) =>
    set((state) => ({ photos: state.photos.filter((p) => p.id !== photo.id) })),
  isFavorite: (photoId: number) => {
    const { photos } = get();
    return photos.some((p) => p.id === photoId);
  },
}));
