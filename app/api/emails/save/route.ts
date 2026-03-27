import ProjectRequestModel from "@/db/models/ProjectRequest.model";
import { NextRequest, NextResponse } from "next/server";
import { getClient } from "@/db/mongoose";
await getClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, subject, description, fileUrls } = body;

    ProjectRequestModel.create({
      fullName,
      email,
      subject,
      description,
      fileUrls,
    });

    return NextResponse.json(
      { message: "User created successfully" },
      {
        status: 201,
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
