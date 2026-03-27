import { Thumbnail, Video } from "@/types/project.types";
import { create } from "zustand";

type addProjectState = {
  title: string | null;
  setTitle: (value: string | null) => void;
  description: string | null;
  setDescription: (value: string | null) => void;
  projectImages: string[] | undefined;
  setImages: (value: string[] | undefined) => void;
  projectVideos: Video[] | undefined;
  setProjectVideos: (value: Video[] | undefined) => void;
  projectModels: string[] | undefined;
  setProjectModels: (value: string[] | undefined) => void;
  isFeatured: boolean;
  setIsFeatured: (value: boolean) => void;
  thumbnail: Thumbnail;
  setThumbnail: (
    _id: string | undefined,
    type: "Image" | "Video" | "Model",
    source: string,
    fileOrUrl: string | undefined,
  ) => void;
};

export const useAddProjectStore = create<addProjectState>((set) => ({
  title: null,
  description: null,
  projectImages: undefined,
  projectVideos: undefined,
  projectModels: undefined,
  isFeatured: false,
  thumbnail: { type: "Image", source: "Upload", fileOrUrl: "" },
  setTitle: (value) => set({ title: value }),
  setDescription: (value) => set({ description: value }),
  setImages: (value) => set({ projectImages: value }),
  setProjectVideos: (value) => set({ projectVideos: value }),
  setProjectModels: (value) => set({ projectModels: value }),
  setIsFeatured: (value) => set({ isFeatured: value }),
  setThumbnail: (_id, type, source, fileOrUrl) =>
    set({ thumbnail: { _id, type, source, fileOrUrl } }),
}));
