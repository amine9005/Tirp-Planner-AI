import { NextRequest, NextResponse } from "next/server";
import { getClient } from "@/db/mongoose";
import ProjectRequestModel from "@/db/models/ProjectRequest.model";

await getClient();

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const requestId = (await params).id;
  try {
    // console.log("title ", title, "description: ", description);
    // console.log("getting request  by id ");

    const request = (await ProjectRequestModel.find({ _id: requestId }))[0];

    return NextResponse.json(
      { message: "Request Retrieved Successfully", request: request },
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
