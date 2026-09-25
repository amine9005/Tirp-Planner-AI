import mongoose, { HydratedDocument, InferSchemaType, Schema } from "mongoose";
import PlaceModel from "./Location.model";

// Define the schema for Place based on the provided structure
const activitiesSchema: Schema = new mongoose.Schema({
  location_details: {
    type: mongoose.Schema.ObjectId,
    ref: PlaceModel.modelName,
  },
  ticket_pricing: { type: String, required: true },
  time_travel_each_location: { type: String, required: true },
  best_time_to_visit: { type: String, required: true },
});

// Export the MongoDB model for Activities
const ActivitiesModel =
  mongoose.models.activities || mongoose.model("activities", activitiesSchema);

export default ActivitiesModel;
export type Activities = InferSchemaType<typeof activitiesSchema>;
export type PlaceDocument = HydratedDocument<Activities>;
