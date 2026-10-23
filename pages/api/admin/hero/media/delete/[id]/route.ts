import { deleteFileHelper } from "@/helpers/deleteFile.helper";
import * as fs from "fs";
import { NextRequest } from "next/server";

import path from "path";
const DIR_PATH = path.resolve(`./public/hero/images`);
if (!fs.existsSync(DIR_PATH)) {
  fs.mkdirSync(DIR_PATH, { recursive: true });
}
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  console.log("deleting media ", await params);
  const id = (await params).id;
  return await deleteFileHelper(id, DIR_PATH);
}
