import { NextRequest, NextResponse } from "next/server";
import { getClient } from "@/db/mongoose";
import HeroMediaModel from "@/db/models/HeroMedia.model";
await getClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      displayType,
      videoSource,
      videoUrl,
      imageUrl,
      model3D_Url,
      videoFileName,
    } = body;
    const doc = (await HeroMediaModel.find())[0];
    // console.log("displayType ", displayType, "videoSource: ", videoSource);

    if (!doc) {
      HeroMediaModel.create({
        displayType,
        videoSource,
        videoUrl,
        imageUrl,
        model3D_Url,
        videoFileName,
      });
    } else {
      doc.displayType = displayType;
      doc.videoSource = videoSource;
      doc.videoUrl = videoUrl;
      doc.imageUrl = imageUrl;
      doc.model3D_Url = model3D_Url;
      doc.videoFileName = videoFileName;
      await doc.save();
    }

    return NextResponse.json(
      { message: "Hero Media Updated successfully" },
      {
        status: 200,
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

export async function GET() {
  try {
    const hero = await HeroMediaModel.find().limit(1);
    if (!hero || hero.length === 0) {
      return NextResponse.json(
        { message: "Hero data not found" },
        { status: 404 },
      );
    }
    return NextResponse.json({ hero: hero[0] }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 },
    );
  }
}
