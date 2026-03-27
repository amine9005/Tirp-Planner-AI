export interface Video {
  _id?: string;
  source: string;
  fileName: string | undefined;
  url: string | undefined;
}

export interface Thumbnail {
  _id?: string;
  type: "Image" | "Video" | "Model";
  source: string;
  fileOrUrl: string | undefined;
}
export interface ProjectType {
  _id?: string;
  title: string;
  description: string;
  images: string[];
  models: string[];
  videos: Video[];
  isFeatured: boolean;
  thumbnail: Thumbnail;
}
