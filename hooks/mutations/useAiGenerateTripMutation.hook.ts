import { MessageAISchemaType } from "@/validations/AI.zod";
import { useAI_Mutation } from "./useAI-ModelMutation.hook";
import { useState } from "react";

export function useGenerateTripHook() {
  const { mutateAsync: sendMessage } = useAI_Mutation();
  const [loadingTrip, setLoadingTrip] = useState<boolean>(false);

  const generateTrip = async ({
    isFinal,
    messages,
  }: {
    isFinal: boolean;
    messages: MessageAISchemaType[];
  }) => {
    console.log("is final ", isFinal);

    if (isFinal) {
      try {
        console.log("generating trip Itinerary...");
        setLoadingTrip(true);
        const tripItinerary = await sendMessage({
          messages: messages,
          isFinal: isFinal,
        });
        setLoadingTrip(true);

        console.log("tripItinerary: ", tripItinerary);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return { generateTrip, loadingTrip };
}
