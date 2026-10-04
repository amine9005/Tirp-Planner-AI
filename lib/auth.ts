import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { getClient } from "@/db/mongoose";
// import { bearer } from "better-auth/plugins";
import { stripe } from "@better-auth/stripe";
import Stripe from "stripe";
const stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY!);

import {
  sendResetPasswordEmailAction,
  sendVerificationEmailAction,
} from "@/app/api/actions/emails/emails.controller";

const client = await getClient();
export const auth = betterAuth({
  database: mongodbAdapter(client),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }) => {
      sendResetPasswordEmailAction(user.name, user.email, url);
    },
  },
  socialProviders: {
    google: {
      disableDefaultFetchPlugins: true,
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      prompt: "select_account",
    },
  },
  emailVerification: {
    autoSignInAfterVerification: true,
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url }) => {
      sendVerificationEmailAction(user.email, url);
    },
  },
  user: {
    additionalFields: {
      limit: {
        type: "number",
        required: false,
        defaultValue: 30,
        input: false, // allow user to set role - false with hide this field,
      },
      subscription: {
        type: "string",
        required: true,
        defaultValue: "free",
      },
    },
  },

  plugins: [
    nextCookies(),
    stripe({
      stripeClient,
      stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET!,
      createCustomerOnSignUp: true,
      subscription: {
        enabled: true,
        plans: [
          {
            name: "free", // the name of the plan, it'll be automatically lower cased when stored in the database
            priceId: "price_1UMcaeCLEGaxLDrwAQEBbjdj", // the price ID from stripe
            limits: {
              limit: 10,
            },
          },
          {
            name: "premium",
            priceId: "price_1UMaarCLEGaxLDrwLtOiHjsX",
            annualDiscountPriceId: "price_1UMafRCLEGaxLDrwbLp0VLOp", // (optional) the price ID for annual billing with a discount
            limits: {
              limit: Infinity,
            },
          },
        ],
      },
    }),
  ],
});
