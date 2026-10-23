// File "app/api/serve-file/route.ts"
// (This file is a Next.js 13+ Route Handler)

// fs/promises gives a nice async/await syntax
import fsPromises from "fs/promises";
import { NextRequest } from "next/server";
import path from "path";
import fs from "fs";

// "Request" type doesn't have to be imported,
// it's part of the web platform API and available in Node.js too
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const fileId = (await params).id;
  const DIR_PATH = path.resolve(`./public/contact/files/`);
  if (!fs.existsSync(DIR_PATH)) {
    fs.mkdirSync(DIR_PATH, { recursive: true });
  }
  // I suppose the file exists to simplify the code
  const filePath = DIR_PATH + "\\" + fileId;
  const stats = await fsPromises.stat(filePath);
  // read your file
  const fileContent = await fsPromises.readFile(filePath);
  // and serve it by returning a response
  return new Response(fileContent, {
    status: 200,
    headers: new Headers({
      // this optional header triggers a download in the browser
      "content-disposition": `attachment; filename=${path.basename(filePath)}`,
      "content-length": stats.size + "",
    }),
  });
}
