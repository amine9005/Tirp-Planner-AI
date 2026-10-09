import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/card/card";
import {
  Dictionary,
  PopularPlanType,
  PricingCardProps,
  SubscriptionDataType,
} from "@/types/pricing.types";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/atoms/badge/badge";
import { User } from "better-auth";
import PortalBaseSubscriptionAction from "@/components/ui/actions/subscription/PortalBaseSubscription.action";
const PricingCard = ({
  pricing,
  userData,
  data,
}: {
  pricing: PricingCardProps;
  userData: User | undefined;
  data: Dictionary<SubscriptionDataType> | null | undefined;
}) => {
  return (
    <Card
      key={pricing.title}
      className={
        data &&
        data[pricing.title.toUpperCase()] &&
        pricing.title.toUpperCase() ===
          data[pricing.title.toUpperCase()].plan.toUpperCase()
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

      <CardContent>
        {" "}
        <PortalBaseSubscriptionAction
          data={data}
          pricing={pricing}
          userData={userData}
        />{" "}
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
  );
};

export default PricingCard;
