import * as fs from "fs";
import { NextResponse } from "next/server";

export async function deleteFileHelper(id: string, DIR_PATH: string) {
  try {
    fs.unlinkSync(DIR_PATH + "/" + id);
    return NextResponse.json(
      { message: "file deleted from project successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete video from project", error: error },
      { status: 500 },
    );
  }
}
