"use client";
import { useUserQuery } from "@/hooks/queries/useUser.hook";
import { P } from "@/components/ui/atoms/text/Text";
import { Loader2Icon } from "lucide-react";
import { useTripsQuery } from "@/hooks/queries/useTripPlannerQuery.hook";
import TripCard from "@/components/ui/organisms/cards/trip-planner/Trip.card";
import { BlurFade } from "@/components/ui/Effects/blur-fade";

const AllTripsAction = () => {
  const { data: userData, isPending: isLoadingUserData } = useUserQuery();
  const { error, data, isPending } = useTripsQuery(userData?.user.id);

  // console.log(
  //   "data ",
  //   JSON.stringify(data) + " isPending " + isPending + " error " + error,
  //   "userId ",
  //   userData?.user.id,
  // );

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

  return (
    <div className="flex mx-auto justify-center items-center w-full h-[85vh]">
      <div className="grid  grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-8 mt-10 max-w-7xl">
        {data &&
          data.map((item, idx) => (
            <BlurFade onlyOnce={false} key={idx} delay={0.3 + idx * 0.1} inView>
              <TripCard
                key={idx}
                trip={item}
                imageSrc={item.itinerary[0].activities[0].place_image_url}
              />
            </BlurFade>
          ))}
      </div>
    </div>
  );
};

export default AllTripsAction;
