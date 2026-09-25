import HotelModel, { Hotel, HotelDocument } from "@/db/models/Hotel.model";
import TripPlanModel from "@/db/models/TripPlan.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const {
      destination,
      duration,
      origin,
      budget,
      travel_interests,
      special_requirements,
      group_size,
      hotels,
      activities,
    } = await req.json();

    console.log("Hotels ", hotels);
    const hotelsDoc = await Promise.all(
      hotels.map(async (item: Hotel) => {
        const hotel = await HotelModel.create({
          ...item,
        });
        return hotel._id;
      }),
    ).catch((e) => {
      console.log(e);
      return NextResponse.json(
        { message: "Failed to create hotel in DB", error: e },
        { status: 500 },
      );
    });

    if (!hotelsDoc) {
      return NextResponse.json(
        { message: "Failed to create hotels in DB" },
        { status: 500 },
      );
    }

    // const hotelsRefs = [];
    // await hotels.map(async (hotel: Hotel) =>
    //   hotelsRefs.push(
    //     await HotelModel.create({
    //       hotel_name: hotel.hotel_name,
    //       hotel_address: hotel.hotel_address,
    //       price_per_night: hotel.price_per_night,
    //       hotel_image_url: hotel.hotel_image_url,
    //       geo_coordinates: hotel.geo_coordinates,
    //       rating: hotel.rating,
    //       description: hotel.description,
    //     }),
    //   ),
    // );

    // await TripPlanModel.create({
    //   destination,
    //   duration,
    //   origin,
    //   budget,
    //   travel_interests,
    //   special_requirements,
    //   group_size,
    //   hotels,
    //   activities,
    // });

    return NextResponse.json(
      { message: "Trip Plan Created Successfully ", hotelsDoc },
      { status: 201 },
    );
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
