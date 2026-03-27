import mongoose, { HydratedDocument, InferSchemaType } from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    source: { type: String, required: true },
    fileName: { type: String, required: false },
    url: { type: String, required: false },
  },
  { timestamps: true },
);

const VideoModel =
  mongoose.models.video || mongoose.model("video", videoSchema);

export default VideoModel;
export type Video = InferSchemaType<typeof videoSchema>;
export type VideoDocument = HydratedDocument<Video>;
