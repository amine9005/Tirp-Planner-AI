import Link from "next/link";
import { buttonVariants } from "@/components/ui/atoms/button/button.variants";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import RestoreSubscriptionButtonMolecule from "@/components/ui/molecules/restore-subscription-button/RestoreSubscriptionButton.molecule";

import PaymentButtonMolecule from "@/components/ui/molecules/payment-button/PaymentButton.molecule";
import { PricingCardProps, SubscriptionDataType } from "@/types/pricing.types";
import { User } from "better-auth";
import CancelSubscriptionDialog from "@/components/ui/organisms/dialog/subscription/CancelSubscription.dialog";
// import BillingPortalButtonMolecule from "@/components/ui/molecules/billing-portal-button/BillingPortalButton.molecule";

const SubscriptionAction = ({
  pricing,
  userData,
  data,
}: {
  pricing: PricingCardProps;
  userData: User | undefined;
  data: SubscriptionDataType | null | undefined;
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
            subscriptionId={data.stripeSubscriptionId!}
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
        <CancelSubscriptionDialog
          subscriptionId={data!.stripeSubscriptionId!}
          referenceId={userData!.id}
          returnUrl="/pricing"
          text={"Do You Want To Cancel Your current Subscription ?"}
          // , Changes Will Take At The End Of Your Subscription Period
          id="cancel-sub"
          title="Cancel Subscription"
          name="Cancel Subscription"
        />
      );
    }
  }
  // console.log("data: ", data);
  // return (
  //   <BillingPortalButtonMolecule
  //     referenceId={userData?.id}
  //     returnUrl="/pricing"
  //     text={
  //       pricing.title.toLocaleUpperCase() === "FREE"
  //         ? "Manage Subscription"
  //         : "Upgrade"
  //     }
  //   />
  // );
  return (
    <PaymentButtonMolecule
      successUrl={pricing.successUrl!}
      cancelUrl={pricing.cancelUrl!}
      returnUrl={pricing.returnUrl!}
      subscriptionId={data && data.stripeSubscriptionId}
      plan={pricing.plan!}
      href={pricing.href}
      text={pricing.buttonText}
    />
  );
};

export default SubscriptionAction;
