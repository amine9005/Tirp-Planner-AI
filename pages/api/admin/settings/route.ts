import { NextRequest, NextResponse } from "next/server";
import { getClient } from "@/db/mongoose";
import SettingsModel from "@/db/models/Settings.model";
await getClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { copyright, primaryColor, secondaryColor, useCircle, circleColor } =
      body;
    const doc = (await SettingsModel.find())[0];
    // console.log("copyright ", copyright, "primaryColor: ", primaryColor);

    if (!doc) {
      SettingsModel.create({
        copyright,
        primaryColor,
        secondaryColor,
        useCircle,
        circleColor,
      });
    } else {
      doc.copyright = copyright;
      doc.primaryColor = primaryColor;
      doc.secondaryColor = secondaryColor;
      doc.useCircle = useCircle;
      doc.circleColor = circleColor;
      await doc.save();
    }

    return NextResponse.json(
      { message: "Site Settings Updated successfully" },
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
    const settings = await SettingsModel.find().limit(1);
    if (!settings || settings.length === 0) {
      return NextResponse.json(
        { message: "Site Settings not found" },
        { status: 404 },
      );
    }
    return NextResponse.json({ settings: settings[0] }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error", error },
      { status: 500 },
    );
  }
}
