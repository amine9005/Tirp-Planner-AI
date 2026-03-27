import mongoose, { HydratedDocument, InferSchemaType } from "mongoose";
import VideoModel from "./Video.model";
import ThumbnailModel from "./Thumbnail.model";
const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    isFeatured: { type: Boolean, required: true },
    images: [{ type: String, required: false }],
    models: [{ type: String, required: false }],
    videos: [{ type: mongoose.Schema.ObjectId, ref: VideoModel.modelName }],
    thumbnail: {
      type: mongoose.Schema.ObjectId,
      ref: ThumbnailModel.modelName,
    },
  },
  { timestamps: true },
);

const ProjectModel =
  mongoose.models.project || mongoose.model("project", projectSchema);

export default ProjectModel;
export type Project = InferSchemaType<typeof projectSchema>;
export type ProjectDocument = HydratedDocument<Project>;
