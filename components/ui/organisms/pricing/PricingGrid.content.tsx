import { PricingCardProps, SubscriptionDataType } from "@/types/pricing.types";
import { User } from "better-auth";
import { PricingGridOrganism } from "./PricingGrid.organism";

const pricingList: PricingCardProps[] = [
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
    buttonText: "Upgrade",
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

interface Props {
  error: Error | null;
  isPending: boolean;
  isLoadingUserData: boolean;
  userData: User;
  pricingList: PricingCardProps[];
  data: SubscriptionDataType;
}

const PricingGridContent = ({
  error,
  isPending,
  isLoadingUserData,
  userData,
  data,
}: Props) => {
  return (
    <PricingGridOrganism
      data={data}
      error={error}
      isPending={isPending}
      isLoadingUserData={isLoadingUserData}
      userData={userData}
      pricingList={pricingList}
    />
  );
};

export default PricingGridContent;
