import Link from "next/link";
import { buttonVariants } from "@/components/ui/atoms/button/button.variants";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import RestoreSubscriptionButtonMolecule from "@/components/ui/molecules/restore-subscription-button/RestoreSubscriptionButton.molecule";
import BillingPortalButtonMolecule from "@/components/ui/molecules/billing-portal-button/BillingPortalButton.molecule";
import PaymentButtonMolecule from "@/components/ui/molecules/payment-button/PaymentButton.molecule";
import { PricingCardProps, SubscriptionDataType } from "@/types/pricing.types";
import { User } from "better-auth";

// TODO Condition management if user both sub1 and cancel and sub2 and canceled
const SubscriptionAction = ({
  pricing,
  userData,
  data,
}: {
  pricing: PricingCardProps;
  userData: User | undefined;
  data: SubscriptionDataType | null;
}) => {
  if (!userData)
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

  if (pricing.title.toUpperCase() === data?.plan.toUpperCase()) {
    return (
      <div className="flex justify-between items-center">
        <H2 variant={"primary"}> Current Active Plan</H2>
        {data.cancelAt && (
          <RestoreSubscriptionButtonMolecule
            referenceId={userData.id}
            subscriptionId={data.stripeSubscriptionId}
            text="Restore"
          />
        )}
      </div>
    );
  } else if (pricing.title.toUpperCase() === "FREE") {
    if (data?.cancelAt) {
      return (
        <H2 size={"md"}>
          This Subscription Will Be Active Starting At:
          <strong className="text-primary">
            {" " + new Date(data.cancelAt).toDateString()}
          </strong>
        </H2>
      );
    } else {
      return (
        <BillingPortalButtonMolecule
          referenceId={userData?.id}
          returnUrl="/pricing"
          text={"Manage Subscription"}
        />
      );
    }
  }
  return (
    <PaymentButtonMolecule
      successUrl={pricing.successUrl!}
      cancelUrl={pricing.cancelUrl!}
      plan={pricing.plan!}
      href={pricing.href}
      text={pricing.buttonText}
    />
  );
};

export default SubscriptionAction;
