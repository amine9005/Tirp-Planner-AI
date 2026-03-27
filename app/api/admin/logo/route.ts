import { NextRequest, NextResponse } from "next/server";
import { getClient } from "@/db/mongoose";
import LogoModel from "@/db/models/Logo.Model";
await getClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, imagePath, useImage, leftColor, rightColor } = body;
    const doc = (await LogoModel.find())[0];
    // console.log("fullName ", fullName, "imagePath: ", imagePath);

    if (!doc) {
      LogoModel.create({
        fullName,
        imageUrl: imagePath,
        useImage,
        leftColor,
        rightColor,
      });
    } else {
      doc.fullName = fullName;
      doc.imageUrl = imagePath;
      doc.useImage = useImage;
      doc.leftColor = leftColor;
      doc.rightColor = rightColor;
      await doc.save();
    }

    return NextResponse.json(
      { message: "Logo Updated successfully" },
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
    const logo = await LogoModel.find().limit(1);
    if (!logo || logo.length === 0) {
      return NextResponse.json({ message: "Logo not found" }, { status: 404 });
    }
    return NextResponse.json({ logo: logo[0] }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 },
    );
  }
}
