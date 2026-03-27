// src/app/api/users/[id]/delete/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getClient } from "@/db/mongoose";
import ProjectModel from "@/db/models/Project.model";

await getClient();

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const video = (await params).id;
  // console.log("Item deleted ", video);
  // return NextResponse.json(
  //   { message: "project deleted successfully" },
  //   { status: 200 },
  // );
  try {
    await ProjectModel.findByIdAndDelete(video);
    return NextResponse.json(
      { message: "video deleted from project successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete video from project", error: error },
      { status: 500 },
    );
  }
}
