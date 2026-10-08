import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/card/card";
import {
  PopularPlanType,
  PricingCardProps,
  SubscriptionDataType,
} from "@/types/pricing.types";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/atoms/badge/badge";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import BillingPortalButtonMolecule from "@/components/ui/molecules/billing-portal-button/BillingPortalButton.molecule";
import PaymentButtonMolecule from "@/components/ui/molecules/payment-button/PaymentButton.molecule";
import { User } from "better-auth";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/atoms/button/button.variants";
import RestoreSubscriptionButtonMolecule from "@/components/ui/molecules/restore-subscription-button/RestoreSubscriptionButton.molecule";
const PricingCard = ({
  pricing,
  userData,
  data,
}: {
  pricing: PricingCardProps;
  userData: User | undefined;
  data: SubscriptionDataType | null;
}) => {
  const handle_subscription_action = () => {
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
            text={"Cancel subscription"}
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

  return (
    <Card
      key={pricing.title}
      className={
        pricing.title.toUpperCase() === data?.plan.toUpperCase()
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
          <span className="text-muted-foreground"> {pricing.billing}</span>
        </div>

        <CardDescription>{pricing.description}</CardDescription>
      </CardHeader>

      <CardContent> {handle_subscription_action()}</CardContent>

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
  );
};

export default PricingCard;
