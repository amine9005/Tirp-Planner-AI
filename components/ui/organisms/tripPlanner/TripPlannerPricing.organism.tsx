"use client";
import { Badge } from "@/components/ui/atoms/badge/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/card/card";
import { Check, Loader2Icon } from "lucide-react";

import PaymentButtonMolecule from "@/components/ui/molecules/payment-button/PaymentButton.molecule";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import { P } from "@/components/ui/atoms/text/Text";
import { useGetSubscriptionHook } from "@/hooks/queries/useUser.hook";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
  href: string;
  plan: string;
  successUrl?: string;
  cancelUrl?: string;
  redirectUrl?: string;
  paymentLink?: string;
  billing: string;
}

const pricingList: PricingProps[] = [
  {
    title: "Free",
    popular: 0,
    price: 0,
    description:
      "Get Started And Create beautiful Trips For You, Your Family And Friends",
    buttonText: "Get Started",
    benefitList: ["10 Trip Plans Per Month"],
    href: "/sign-in",
    plan: "free",
    successUrl: "/payment-success",
    cancelUrl: "/payment-cancel",
    redirectUrl: "/payment-success",
    billing: "/month",
  },
  {
    title: "Premium",
    popular: 1,
    price: 4.99,
    description: "Best For Serious Explorers and Travelers.",
    buttonText: "Buy Now",
    benefitList: [
      "Unlimited Trip Plans",
      "90 Days Trip History",
      "24/7 Email Support",
      "3D Place On Map",
    ],
    href: "/sign-in",
    plan: "premium",
    successUrl: "/payment-success",
    cancelUrl: "/payment-cancel",
    redirectUrl: "/payment-success",
    billing: "/month",
  },
];

export const TripPlannerPricing = () => {
  const { loading, data, error } = useGetSubscriptionHook();
  // console.log(
  //   "islanding " + loading,
  //   " error: " + error + " subscription: ",
  //   data,
  // );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center gap-4">
          <Loader2Icon className="animate-spin size-10" />
          <P>Loading...</P>
        </div>
      </div>
    );
  }

  if (!data) {
    console.log("error ", error);
    return (
      <div className="flex justify-center items-center h-screen p-16">
        <P size={"xl"} variant={"error"}>
          {"Failed To Load Pricing Information."}
        </P>
      </div>
    );
  }

  return (
    <section id="pricing" className="w-full max-w-7xl mx-auto  py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get
        <span className="bg-linear-to-r from-[#ffffff] to-primary uppercase text-transparent bg-clip-text">
          {" "}
          Unlimited{" "}
        </span>
        Access
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8"></h3>
      <div className="grid md:grid-cols-2 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.title.toUpperCase() === data.toUpperCase()
                ? "bg-gray-800"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">${pricing.price}</span>
                <span className="text-muted-foreground">
                  {" "}
                  {pricing.billing}
                </span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              {pricing.title.toUpperCase() === data.toUpperCase() ? (
                <H2 variant={"primary"}> Current Active Plan</H2>
              ) : (
                <PaymentButtonMolecule
                  successUrl={pricing.successUrl!}
                  cancelUrl={pricing.cancelUrl!}
                  plan={pricing.plan!}
                  href={pricing.href}
                  text={pricing.buttonText}
                />
              )}
            </CardContent>

            <hr className="w-4/5 mx-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-primary" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
