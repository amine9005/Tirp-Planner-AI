import { TripPlan } from "@/db/models/TripPlan.model";
import { useSaveTripPlanMutation } from "../mutations/useSaveTripPlanMutation.hook";

export function useSaveTripPlanHook() {
  const { mutateAsync: saveTripPlaMt } = useSaveTripPlanMutation();

  const saveTripPlan = async (tripPlan: TripPlan) => {
    try {
      const resp = await saveTripPlaMt(tripPlan);
      console.log("save trip ", resp);
    } catch (e) {
      console.log("error saving trip ", e);
    }
  };

  return { saveTripPlan };
}
