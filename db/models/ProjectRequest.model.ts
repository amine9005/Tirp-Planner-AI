import mongoose, { HydratedDocument, InferSchemaType } from "mongoose";

const projectRequestSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    description: { type: String, required: true },
    fileUrls: [{ type: String, required: false }],
  },
  { timestamps: true },
);

const ProjectRequestModel =
  mongoose.models.project_request ||
  mongoose.model("project_request", projectRequestSchema);

export default ProjectRequestModel;
export type ProjectRequest = InferSchemaType<typeof projectRequestSchema>;
export type ProjectRequestDocument = HydratedDocument<ProjectRequest>;
