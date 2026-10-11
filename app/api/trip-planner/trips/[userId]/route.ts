import { NextRequest, NextResponse } from "next/server";
import { getClient } from "@/db/mongoose";
import TripPlanModel from "@/db/models/TripPlan.model";

await getClient();

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> },
) {
  const userId = (await params).userId;
  try {
    // console.log("title ", title, "description: ", description);
    console.log("getting Trips ");

    const trips = await TripPlanModel.find({ userId })
      .populate("hotels")
      .populate("itinerary");

    console.log("trips ", trips);

    return NextResponse.json(
      { message: "Trips Retrieved Successfully", trips: trips },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Get Trips Internal Server Error", error },
      { status: 500 },
    );
  }
}
