"use client";
import {
  SelectTravelList,
  SelectBudgetOptions,
} from "@/components/ui/display/text-suggestions/trip-planner.display";
import SelectByIconOrganism from "@/components/ui/organisms/tripPlanner/SelectByIcon.organism";
import { useAiSendMessageHook } from "@/hooks/submit/useAiSendMessageSubmit.hook";
import React from "react";

const Page = () => {
  const { onSend } = useAiSendMessageHook();

  return (
    <div className="flex flex-col ">
      <SelectByIconOrganism items={SelectTravelList} onSend={onSend} />
      <SelectByIconOrganism items={SelectBudgetOptions} onSend={onSend} />
    </div>
  );
};

export default Page;
