import { create } from "zustand";

type ImagePathState = {
  imagePath: string | null;
  setImagePath: (path: string | null) => void;
};

export const useTmpLogoStore = create<ImagePathState>((set) => ({
  imagePath: null,
  setImagePath: (path) => set({ imagePath: path }),
}));
