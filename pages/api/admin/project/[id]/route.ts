import { NextRequest, NextResponse } from "next/server";
import { getClient } from "@/db/mongoose";
import ProjectModel from "@/db/models/Project.model";

await getClient();

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const projectId = (await params).id;
  try {
    // console.log("title ", title, "description: ", description);
    console.log("getting projects ");

    const project = (
      await ProjectModel.find({ _id: projectId })
        .populate("videos")
        .populate("thumbnail")
    )[0];

    return NextResponse.json(
      { message: "Projects Retrieved Successfully", project: project },
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
