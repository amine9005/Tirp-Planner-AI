import { validateFile } from "@/validations/upload.validate";
import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import path from "path";
const DIR_PATH = path.resolve(`./public`);
if (!fs.existsSync(DIR_PATH)) {
  fs.mkdirSync(DIR_PATH, { recursive: true });
}
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const logo = formData.get("logo");

    if (logo === "YES") {
      const DIR_PATH = path.resolve(`./public/logos`);
      if (!fs.existsSync(DIR_PATH)) {
        fs.mkdirSync(DIR_PATH, { recursive: true });
      }
    } else {
      const DIR_PATH = path.resolve(`./public/images`);
      if (!fs.existsSync(DIR_PATH)) {
        fs.mkdirSync(DIR_PATH, { recursive: true });
      }
    }
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
    const filename = uuidv4().slice(0, 8) + "." + file.name.split(".")[1];
    const fileType = file.type;
    const fileSize = file.size;
    const fileArrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(fileArrayBuffer);
    const filePath = path.resolve(
      logo === "YES" ? DIR_PATH + "/logos" : DIR_PATH + "/images",
      filename,
    );

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
