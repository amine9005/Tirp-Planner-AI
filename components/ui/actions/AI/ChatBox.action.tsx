"use client";
import { useAiSendMessageHook } from "@/hooks/submit/useAiSendMessageSubmit.hook";
import ChatBoxOrganism from "@/components/ui/organisms/chatbox/ChatBox.organism";
import { useGenerateTripHook } from "@/hooks/mutations/useAiGenerateTripMutation.hook";
import { useEffect, useState } from "react";
import { useSaveTripPlanHook } from "@/hooks/submit/useTripPlanSubmit.hook";
import { aiResponseToJSON } from "@/helpers/AiUtils.helper";
import { TripPlan } from "@/db/models/TripPlan.model";

const ChatBoxAction = () => {
  const { isLoading, messages, userMessage, setUserMessage, onSend, isFinal } =
    useAiSendMessageHook();

  const { generateTrip } = useGenerateTripHook();
  const { saveTripPlan } = useSaveTripPlanHook();

  const tmp = {
    destination: "to Pairs",

    duration: "string",

    origin: "string",

    budget: "string",

    group_size: "string",

    hotels: [
      {
        hotel_name: "string",

        hotel_address: "string",

        price_per_night: "string",

        hotel_image_url: "string",

        geo_coordinates: {
          latitude: "number",

          longitude: "number",
        },

        rating: "number",

        description: "string",
      },
    ],

    itinerary: [
      {
        day: "number",

        day_plan: "string",

        best_time_to_visit_day: "string",

        activities: [
          {
            place_name: "string",

            place_details: "string",

            place_image_url: "string",

            geo_coordinates: {
              latitude: "number",

              longitude: "number",
            },

            place_address: "string",

            ticket_pricing: "string",

            time_travel_each_location: "string",

            best_time_to_visit: "string",
          },
        ],
      },
    ],
  };
  useEffect(() => {
    const generateTripAndSaveTrip = async () => {
      if (true) {
        console.log("finalizing");
        saveTripPlan(tmp as unknown as TripPlan);

        // const trip_string = await generateTrip({ messages, isFinal });
        // if (trip_string) {
        //   const result = aiResponseToJSON(trip_string);
        // }
      }
    };

    generateTripAndSaveTrip();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ChatBoxOrganism
      href={""}
      isLoading={isLoading}
      messages={messages}
      userMessage={userMessage}
      setUserMessage={setUserMessage}
      onSend={onSend}
    />
  );
};

export default ChatBoxAction;
