import { NextRequest, NextResponse } from "next/server";
import { getClient } from "@/db/mongoose";
import ProjectModel from "@/db/models/Project.model";
import mongoose from "mongoose";
import VideoModel from "@/db/models/Video.model";
import { Video } from "@/types/project.types";
import ThumbnailModel from "@/db/models/Thumbnail.model";

await getClient();

export async function POST(req: NextRequest) {
  try {
    const dbSession = await mongoose.startSession();
    dbSession.startTransaction();

    const body = await req.json();
    const {
      title,
      description,
      projectImages,
      projectModels,
      projectVideos,
      isFeatured,
      thumbnail,
    } = body;
    // console.log("title ", title, "description: ", description);
    // console.log("videos ", projectVideos);
    const videos: string[] =
      projectVideos.length > 0
        ? await Promise.all(
            projectVideos.map(async (video: Video) => {
              const videoX = await VideoModel.create(
                [
                  {
                    url: video.url,
                    fileName: video.fileName,
                    source: video.source,
                  },
                ],
                { session: dbSession },
              );
              // console.log("videoX ", videoX);
              return videoX[0]._id;
            }),
          )
        : [];

    const thumbnailRef = (
      await ThumbnailModel.create(
        [
          {
            type: thumbnail.type,
            source: thumbnail.source,
            fileOrUrl: thumbnail.fileOrUrl,
          },
        ],
        { session: dbSession },
      )
    )[0];

    // console.log("Thumbnail Created");

    const project = await ProjectModel.create(
      [
        {
          title,
          description,
          images: projectImages,
          models: projectModels,
          videos: videos,
          isFeatured: isFeatured,
          thumbnail: thumbnailRef,
        },
      ],
      { session: dbSession },
    );
    await dbSession.commitTransaction();
    dbSession.endSession();
    return NextResponse.json(
      { message: "Project Added successfully", project: project },
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
