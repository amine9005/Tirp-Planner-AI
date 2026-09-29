import { TripPlan } from "@/db/models/TripPlan.model";
import { useSaveTripPlanMutation } from "../mutations/useSaveTripPlanMutation.hook";
import { useAIMessagesStore } from "@/store/AI/messages.store";
import { aiResponseToJSON } from "@/helpers/AiUtils.helper";
import { useAiSendMessageHook } from "./useAiSendMessageSubmit.hook";
import { useAI_Mutation } from "@/hooks/mutations/useAI-ModelMutation.hook";
import { MessageAISchemaType } from "@/validations/AI.zod";

export function useTripPlanHook() {
  const { mutateAsync: saveTripPlaMt } = useSaveTripPlanMutation();
  const setSuccess = useAIMessagesStore((state) => state.setSuccess);
  const success = useAIMessagesStore((state) => state.success);
  const { mutateAsync: sendMessage } = useAI_Mutation();
  const isLoading = useAIMessagesStore((state) => state.isLoading);
  const setIsLoading = useAIMessagesStore((state) => state.setIsLoading);

  const { messages, isFinal } = useAiSendMessageHook();

  const setTripPlanString = useAIMessagesStore(
    (state) => state.setTripPlanString,
  );
  const tripPlanString = useAIMessagesStore((state) => state.tripPlanString);

  const saveTripPlan = async (tripPlan: TripPlan) => {
    try {
      const resp = await saveTripPlaMt(tripPlan);
      setSuccess(true);
      // console.log("save trip ", resp);
      return resp;
    } catch (e) {
      setSuccess(false);
      console.log("error saving trip ", e);
      return null;
    }
  };

  const generateTrip = async ({
    isFinal,
    messages,
  }: {
    isFinal: boolean;
    messages: MessageAISchemaType[];
  }) => {
    // console.log("is final ", isFinal);

    if (isFinal) {
      try {
        // console.log("generating trip Itinerary...");
        setIsLoading(true);
        const tripItinerary = await sendMessage({
          messages: messages,
          isFinal: isFinal,
        });
        setIsLoading(false);

        // console.log("tripItinerary: ", tripItinerary);
        setSuccess(true);

        return tripItinerary;
      } catch (error) {
        console.log(error);
        setSuccess(false);
        return null;
      }
    }
  };

  const generateTripAndSaveTrip = async () => {
    // console.log("finalizing");

    const trip_string = tripPlanString
      ? tripPlanString
      : await generateTrip({ messages, isFinal });
    // console.log("trip string: ", trip_string);

    if (trip_string) {
      try {
        const result =
          typeof trip_string === "string"
            ? trip_string
            : aiResponseToJSON(trip_string);
        // console.log("result json ", result);
        setTripPlanString(result);
        // console.log("trip plan result ", result.trip_plan);
        saveTripPlan(result.trip_plan);
        setSuccess(true);
      } catch (e) {
        console.log("error ", e);
      }
    } else {
      setSuccess(false);
    }
  };

  return { saveTripPlan, generateTripAndSaveTrip, success, isLoading };
}
