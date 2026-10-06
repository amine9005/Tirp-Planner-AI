"use client";
import { Calendar, Users, Wallet } from "lucide-react";
import { Timeline } from "@/components/ui/organisms/timeline/Timeline.organism";

import { H2 } from "@/components/ui/atoms/heading/heading2";
import { BlurFade } from "@/components/ui/Effects/blur-fade";
import ItineraryCard from "@/components/ui/organisms/cards/trip-planner/Itinerary.card";
import HotelCardAction from "./HotelCard.action";
import { useAIMessagesStore } from "@/store/AI/messages.store";
import TripPlaceHolderImageAction from "./TripPlaceHolderImage.action";

const TripPlannerAction = () => {
  const tripPlan = useAIMessagesStore((state) => state.tripPlan);

  if (!tripPlan) {
    return <TripPlaceHolderImageAction />;
  }

  const data = [
    {
      title: "Hotels",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {tripPlan?.hotels.map((hotel, idx) => {
            return (
              <BlurFade
                onlyOnce={false}
                key={idx}
                delay={0.3 + idx * 0.1}
                inView
              >
                <HotelCardAction hotel={hotel} idx={idx} />
              </BlurFade>
            );
          })}
        </div>
      ),
    },
    ...tripPlan?.itinerary.map((dayData) => ({
      title: `Day ${dayData.day}`,
      content: <ItineraryCard dayData={dayData} />,
    })),
  ];
  return (
    <div className="relative h-[85vh] overflow-y-auto w-full col-span-2 gap-2">
      <Timeline
        data={data}
        mainTitle={
          <H2 size={"xl"}>
            Your Trip Itinerary From{" "}
            <strong className="text-primary">{tripPlan?.origin}</strong> To{" "}
            <strong className="text-primary">{tripPlan?.destination}</strong> Is
            Ready
          </H2>
        }
        mainDescription={
          <div className="flex flex-row gap-5 items-center">
            <div className="flex gap-2 item-center">
              <Calendar className="size-5" />
              {tripPlan?.duration}
            </div>
            <div className="flex gap-2 item-center">
              <Wallet className="size-5" />
              {tripPlan?.budget}
            </div>
            <div className="flex gap-2 item-center">
              <Users className="size-5" />
              {tripPlan?.group_size}
            </div>
          </div>
        }
      />
    </div>
  );
};

export default TripPlannerAction;
