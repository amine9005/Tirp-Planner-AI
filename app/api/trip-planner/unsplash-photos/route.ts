import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { placeName } = await req.json();

    const BASE_URL = "https://api.unsplash.com/search/photos";

    const result = await axios.get(BASE_URL, {
      params: {
        page: 1,
        per_page: 10,
        query: placeName,
        client_id: process.env.UNSPLASH_CLIENT_ID,
        w: 500,
        h: 500,
      },
    });

    return NextResponse.json(
      {
        message: "Data Fetched successfully From Unsplash Images ",
        data: result.data,
      },
      { status: 200 },
    );
  } catch (e) {
    console.log("Failed To Fetch Place Photos From Unsplash Images ", e);
    return NextResponse.json(
      { message: "Failed To Fetch Place Photos From Unsplash Images ", e },
      { status: 500 },
    );
  }
}
