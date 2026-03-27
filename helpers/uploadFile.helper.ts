import { validateFile } from "@/validations/upload.validate";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

export async function uploadFile(req: NextRequest, destinationPath: string) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
    if (!(file instanceof Blob)) {
      return NextResponse.json(
        { error: "Invalid file format" },
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    if (!validateFile(file)) {
      throw new Error("Invalid File");
    }
    const last = file.name.split(".");
    const filename = uuidv4().slice(0, 8) + "." + last[last.length - 1];
    const fileType = file.type;
    const fileSize = file.size;
    const fileArrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(fileArrayBuffer);
    const filePath = path.resolve(destinationPath, filename);

    await fs.writeFileSync(filePath, buffer);
    return NextResponse.json(
      {
        success: true,
        filename,
        fileType,
        fileSize,
        destination: filePath,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Error handling file upload:", error);
    return NextResponse.json(
      {
        error: "Error handling file upload",
        details: error instanceof Error ? error.message : String(error),
      },
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
