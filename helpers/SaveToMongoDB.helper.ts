import mongoose from "mongoose";
import { NextResponse } from "next/server";

interface MongoDbProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  collection: Array<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mongoDbModel: mongoose.Model<any>;
  db_name: string;
}

export async function saveArrayToMongoDB({
  collection,
  mongoDbModel,
  db_name,
}: MongoDbProps) {
  const modelsDoc = await Promise.all(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    collection.map(async (item: any) => {
      const model = await mongoDbModel.create({
        ...item,
      });
      return model._id;
    }),
  ).catch((e) => {
    console.log(e);
    return NextResponse.json(
      { message: "Failed to create " + db_name + " in DB", error: e },
      { status: 500 },
    );
  });

  return modelsDoc;
}
