"use client";
import { ChatProgressUI } from "@/types/create-trip.types";
import { JSX } from "react";
import SelectByIconOrganism from "@/components/ui/organisms/tripPlanner/SelectByIcon.organism";
import {
  SelectBudgetOptions,
  SelectTravelList,
} from "@/components/ui/display/text-suggestions/trip-planner.display";
import { useAiSendMessageHook } from "@/hooks/submit/useAiSendMessageSubmit.hook";

const DisplaySelectUIAction = ({ ui }: ChatProgressUI): JSX.Element => {
  const { onSend } = useAiSendMessageHook();

  switch (ui) {
    case "groupSize":
      return <SelectByIconOrganism items={SelectTravelList} onSend={onSend} />;
    case "budget":
      return (
        <SelectByIconOrganism items={SelectBudgetOptions} onSend={onSend} />
      );
  }
  return <div></div>;
};

export default DisplaySelectUIAction;
