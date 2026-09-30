"use client";
import { Calendar, Star, Users, Wallet } from "lucide-react";
import { Timeline } from "../timeline/Timeline.organism";
import { useAIMessagesStore } from "@/store/AI/messages.store";
import Image from "next/image";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import { TRIP_DATA } from "@/helpers/DummyData.helper";
import { P } from "../../atoms/text/Text";

const TripPlannerOrganism = () => {
  const tripPlan = TRIP_DATA;
  // useAIMessagesStore((state) => state.tripPlan);
  const data = [
    {
      title: "Recommended Hotels",
      content: (
        <div className="flex flex-col gap-8">
          {tripPlan?.hotels.map((hotel, index) => {
            return (
              <div key={index} className="flex flex-col gap-1">
                <img
                  src={
                    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2600&auto=format&fit=crop"
                  }
                  alt={hotel.hotel_image_url}
                  className="rounded-xl object-cover shadow pb-2"
                />
                <H2 className="font-semibold" size={"lg"}>
                  {hotel.hotel_name}
                </H2>
                <P
                  className="font-semibold "
                  size={"default"}
                  variant={"muted"}
                >
                  {hotel.hotel_address}
                </P>
                <div className="flex justify-between w-full gap-4">
                  <P className="flex flex-row gap-4" variant={"success"}>
                    {" "}
                    <Wallet className="size-6 " /> {hotel.price_per_night}
                  </P>
                  <P className="flex gap-2" variant={"warning"}>
                    {" "}
                    <Star className="fill-amber-400" /> {hotel.rating}{" "}
                  </P>
                </div>
                <P className="line-clamp-2" variant={"default"}>
                  {hotel.description}
                </P>
              </div>
            );
          })}
        </div>
      ),
    },
  ];
  return (
    <div className="relative h-[85vh] overflow-y-auto w-full col-span-2 gap-">
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

export default TripPlannerOrganism;
