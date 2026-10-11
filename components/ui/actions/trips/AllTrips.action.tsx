"use client";
import { useUserQuery } from "@/hooks/queries/useUser.hook";
import { P } from "@/components/ui/atoms/text/Text";
import { Loader2Icon } from "lucide-react";
import { useTripsQuery } from "@/hooks/queries/useTripPlannerQuery.hook";

const AllTripsAction = () => {
  const { data: userData, isPending: isLoadingUserData } = useUserQuery();
  const { error, data, isPending } = useTripsQuery(userData?.user.id);

  console.log("data ", data + " isPending " + isPending + " error " + error);

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

  return <div> Welcome Your Trips are</div>;
};

export default AllTripsAction;
