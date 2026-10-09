import { NextRequest, NextResponse } from "next/server";
// import { getClient } from "@/db/mongoose";
// import SubscriptionModel from "@/db/models/Subscription.model";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

// const db = await getClient();
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const user_id = (await params).id;
  try {
    // console.log("title ", title, "description: ", description);
    // console.log("getting subscription " + user_id);
    const subscriptions = await auth.api.listActiveSubscriptions({
      query: {
        referenceId: user_id, // Reference id of the subscription to list.
      },
      // This endpoint requires session cookies.
      headers: await headers(),
    });

    return NextResponse.json(
      {
        message: "Subscription Retrieved Successfully",
        subscription: subscriptions,
      },
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
