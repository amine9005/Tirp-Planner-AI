import { NextResponse } from "next/server";
import { getClient } from "@/db/mongoose";
import ProjectModel from "@/db/models/Project.model";

await getClient();

export async function GET() {
  try {
    // console.log("title ", title, "description: ", description);
    console.log("getting projects ");

    const projects = await ProjectModel.find()
      .populate("videos")
      .populate("thumbnail");

    return NextResponse.json(
      { message: "Projects Retrieved Successfully", projects: projects },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 },
    );
  }
}
