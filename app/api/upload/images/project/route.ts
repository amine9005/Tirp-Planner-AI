import fs from "fs";
import { NextRequest } from "next/server";
import path from "path";
import { uploadFile } from "@/helpers/uploadFile.helper";
const DIR_PATH = path.resolve(`./public/projects/images`);
if (!fs.existsSync(DIR_PATH)) {
  fs.mkdirSync(DIR_PATH, { recursive: true });
}
export async function POST(req: NextRequest) {
  return await uploadFile(req, DIR_PATH);
}
