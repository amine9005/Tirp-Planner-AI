import mongoose, { HydratedDocument, InferSchemaType, Schema } from "mongoose";

// Define the schema for Place based on the provided structure
const placeSchema: Schema = new mongoose.Schema({
  place_name: { type: String, required: true },
  place_details: { type: String, required: true },
  place_image_url: { type: String, required: true },
  geo_coordinates: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
});

// Export the MongoDB model for Place
const PlaceModel =
  mongoose.models.place || mongoose.model("place", placeSchema);

export default PlaceModel;
export type Place = InferSchemaType<typeof placeSchema>;
export type PlaceDocument = HydratedDocument<Place>;
