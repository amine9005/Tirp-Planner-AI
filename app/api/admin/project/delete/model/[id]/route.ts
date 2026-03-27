import { deleteFileHelper } from "@/helpers/deleteFile.helper";
import fs from "fs";
import { NextRequest } from "next/server";
import path from "path";
const DIR_PATH = path.resolve(`./public/models`);
if (!fs.existsSync(DIR_PATH)) {
  fs.mkdirSync(DIR_PATH, { recursive: true });
}
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;
  return await deleteFileHelper(id, DIR_PATH);
}
