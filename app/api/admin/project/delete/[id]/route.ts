// src/app/api/users/[id]/delete/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getClient } from "@/db/mongoose";
import ProjectModel from "@/db/models/Project.model";

await getClient();

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const projectId = (await params).id;
  console.log("project deleted ", projectId);
  return NextResponse.json(
    { message: "project deleted successfully" },
    { status: 200 },
  );
  try {
    await ProjectModel.deleteOne({ _id: projectId });
    return NextResponse.json(
      { message: "project deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete project", error: error },
      { status: 500 },
    );
  }
}
