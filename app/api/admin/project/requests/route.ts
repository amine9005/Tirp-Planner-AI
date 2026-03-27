import { NextResponse } from "next/server";
import { getClient } from "@/db/mongoose";
import ProjectRequestModel from "@/db/models/ProjectRequest.model";

await getClient();

export async function GET() {
  try {
    // console.log("title ", title, "description: ", description);
    // console.log("getting requests ");
    const requests = await ProjectRequestModel.find();

    return NextResponse.json(
      {
        message: "Project Requests Retrieved Successfully",
        requests: requests,
      },
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
