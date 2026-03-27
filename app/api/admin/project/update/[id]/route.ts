// src/app/api/users/[id]/delete/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getClient } from "@/db/mongoose";
import ProjectModel from "@/db/models/Project.model";
import VideoModel, { VideoDocument } from "@/db/models/Video.model";
import ThumbnailModel from "@/db/models/Thumbnail.model";
import mongoose from "mongoose";

await getClient();

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  // console.log("Updating Project from route");
  try {
    const dbSession = await mongoose.startSession();
    dbSession.startTransaction();
    const projectId = (await params).id;
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
    // console.log("is now featured: ", isFeatured);
    // console.log("videos ", projectVideos);

    const videos: string[] =
      projectVideos.length > 0
        ? await Promise.all(
            projectVideos.map(async (video: VideoDocument) => {
              const videoId = video._id ? video._id : undefined;
              // console.log("videoId ", videoId);
              if (videoId) {
                const videoX = await VideoModel.findByIdAndUpdate(
                  videoId,

                  {
                    url: video.url,
                    fileName: video.fileName,
                    source: video.source,
                  },
                );
                return videoX._id;
              } else {
                // console.log("creating file ");
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
              }
            }),
          )
        : [];

    // console.log("update video ", videos);
    // console.log("thumbnail: ", thumbnail);
    const thumbnailRef = (
      await ThumbnailModel.findByIdAndUpdate(
        thumbnail._id,
        {
          type: thumbnail.type,
          source: thumbnail.source,
          fileOrUrl: thumbnail.fileOrUrl,
        },
        { session: dbSession },
      )
    )._id;
    // console.log("thumbnailRef: ", thumbnailRef);

    await ProjectModel.findByIdAndUpdate(
      projectId,
      {
        title,
        description,
        images: projectImages,
        models: projectModels,
        videos: videos,
        isFeatured: isFeatured,
        thumbnail: thumbnailRef,
      },
      { session: dbSession },
    );
    await dbSession.commitTransaction();
    dbSession.endSession();
    return NextResponse.json(
      { message: "project Updated successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.log("error ", error);
    return NextResponse.json(
      { message: "Failed to Updated project", error: error },
      { status: 500 },
    );
  }
}
