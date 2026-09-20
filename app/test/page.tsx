"use client";
import {
  SelectTravelList,
  SelectBudgetOptions,
} from "@/components/ui/display/text-suggestions/trip-planner.display";
import SelectByIconOrganism from "@/components/ui/organisms/tripPlanner/SelectByIcon.organism";
import SelectDays from "@/components/ui/actions/forms/select-days/SelectDays.organism";
import { useAiSendMessageHook } from "@/hooks/submit/useAiSendMessageSubmit.hook";

const Page = () => {
  const { onSend } = useAiSendMessageHook();

  return (
    <div className="flex flex-col ">
      <SelectByIconOrganism items={SelectTravelList} onSend={onSend} />
      <SelectByIconOrganism items={SelectBudgetOptions} onSend={onSend} />
      <SelectDays />
    </div>
  );
};

export default Page;
