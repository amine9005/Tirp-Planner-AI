import {
  Dictionary,
  PricingCardProps,
  SubscriptionDataType,
} from "@/types/pricing.types";
import { User } from "better-auth";
import { PricingGridOrganism } from "./PricingGrid.organism";
import { PricingListData } from "@/constants/trip-planner/TripPlanner.constants";

interface Props {
  error: Error | null;
  isPending: boolean;
  isLoadingUserData: boolean;
  userData: User | undefined;
  pricingList: PricingCardProps[];
  data: Dictionary<SubscriptionDataType> | undefined | null;
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
      pricingList={PricingListData}
    />
  );
};

export default PricingGridContent;
