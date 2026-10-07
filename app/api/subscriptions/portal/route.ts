import { auth } from "@/lib/auth";
import { getClient } from "@/db/mongoose";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

const db = await getClient();

export async function POST(req: NextRequest) {
  const { referenceId, returnUrl } = await req.json();

  const user = await db
    .collection("user")
    .findOne({ _id: new mongoose.Types.ObjectId(referenceId) });
  // console.log(
  //   "subscription details from server: ",
  //   plan,
  //   successUrl,
  //   cancelUrl,
  //   returnUrl,
  // );
  try {
    const data = await auth.api.cancelSubscription({
      body: {
        // locale, // The IETF language tag of the locale Customer Portal is displayed in. If not provided or set to `auto`, the browser's locale is used.
        referenceId, // Reference id of the subscription.
        // customerType, // The type of customer for billing. (Default: "user")
        returnUrl, // Return URL to redirect back after exiting the billing portal.
        disableRedirect: false, // Disable the automatic redirect to the billing page. @default false
      },
      // This endpoint requires session cookies.
      headers: await headers(),
    });

    return NextResponse.json({ data: data }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
