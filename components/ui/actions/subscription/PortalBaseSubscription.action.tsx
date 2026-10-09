import Link from "next/link";
import { buttonVariants } from "@/components/ui/atoms/button/button.variants";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import BillingPortalButtonMolecule from "@/components/ui/molecules/billing-portal-button/BillingPortalButton.molecule";
import {
  Dictionary,
  PricingCardProps,
  SubscriptionDataType,
} from "@/types/pricing.types";
import { User } from "better-auth";

const PortalBaseSubscriptionAction = ({
  pricing,
  userData,
  data,
}: {
  pricing: PricingCardProps;
  userData: User | undefined;
  data: Dictionary<SubscriptionDataType> | null | undefined;
}) => {
  if (!userData || !data)
    return (
      <Link
        className={buttonVariants({
          size: "lg",
          width: "lg",
          variant: "default",
        })}
        href={"/sign-in"}
      >
        Sign In
      </Link>
    );

  if (
    data &&
    data[pricing.title.toUpperCase()] &&
    pricing.title.toUpperCase() ===
      data[pricing.title.toUpperCase()].plan.toUpperCase()
    // pricing.title.toLocaleUpperCase() !== "FREE"
  ) {
    return (
      <div className="flex justify-between items-center">
        <H2 variant={"primary"}> Current Active Plan</H2>
      </div>
    );
  } else {
    return (
      <BillingPortalButtonMolecule
        referenceId={userData?.id}
        returnUrl="/pricing"
        text={
          pricing.title.toLocaleUpperCase() === "FREE"
            ? "Manage Subscription"
            : "Upgrade"
        }
      />
    );
  }
};

export default PortalBaseSubscriptionAction;
