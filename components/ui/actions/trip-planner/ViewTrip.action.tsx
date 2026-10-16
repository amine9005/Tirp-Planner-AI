"use client";
import { useGetTripByIdQuery } from "@/hooks/queries/useTripPlannerQuery.hook";
import { useUserQuery } from "@/hooks/queries/useUser.hook";
import { Loader2Icon } from "lucide-react";
import { P } from "@/components/ui/atoms/text/Text";
import TripPlannerTimelineOrganism from "../../organisms/timeline/trip planner/TripPlannerTimeline.organism";
import { useParams } from "next/navigation";

const ViewTripAction = () => {
  const { data: userData, isPending: isLoadingUserData } = useUserQuery();
  const params = useParams<{ id: string }>();
  // console.log("params ", params);

  const { error, data, isPending } = useGetTripByIdQuery(params?.id);

  console.log(
    "data ",
    JSON.stringify(data),
    " error ",
    error,
    "isLoadingUserData ",
    isLoadingUserData,
    " is Pending ",
    isPending,
  );

  if (error) {
    console.log("userDataError  ", error);
    return (
      <div className="flex justify-center items-center h-screen p-16">
        <P size={"xl"} variant={"error"}>
          {"Failed To Load Pricing Information."}
        </P>
      </div>
    );
  }

  if ((!data && userData) || isLoadingUserData || isPending) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center gap-4">
          <Loader2Icon className="animate-spin size-10" />
          <P>Loading...</P>
        </div>
      </div>
    );
  }

  if (!data) return <></>;

  return (
    <div className="flex justify-center items-center  ">
      <TripPlannerTimelineOrganism tripPlan={data!} />
    </div>
  );
};

export default ViewTripAction;
