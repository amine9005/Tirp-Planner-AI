"use client";
import TextSuggestionsMolecule from "@/components/ui/molecules/suggestions/TextSuggestions.molecule";
import { TripPlannerSuggestions } from "@/components/ui/display/text-suggestions/trip-planner.display";
import { useAiSendMessageHook } from "@/hooks/submit/useAiSendMessageSubmit.hook";
import { DisplayType } from "@/types/general.types";
const SuggestionsAction = ({ display }: DisplayType) => {
  const { onSend } = useAiSendMessageHook();
  return (
    <TextSuggestionsMolecule
      onSend={onSend}
      display={display}
      suggestions={TripPlannerSuggestions}
    />
  );
};

export default SuggestionsAction;
