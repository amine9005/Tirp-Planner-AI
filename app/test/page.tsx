"use client";
import {
  SelectTravelList,
  SelectBudgetOptions,
} from "@/components/ui/display/text-suggestions/trip-planner.display";
import SelectByIconOrganism from "@/components/ui/organisms/tripPlanner/SelectByIcon.organism";
import SelectDays from "@/components/ui/actions/forms/select-days/SelectDays.organism";
import { useAiSendMessageHook } from "@/hooks/submit/useAiSendMessageSubmit.hook";
import FinalTripAction from "@/components/ui/actions/AI/FinalTrip.action";
import Image from "next/image";

const Page = () => {
  const { onSend } = useAiSendMessageHook();

  return (
    <div className="flex flex-col ">
      <Image
        src={"/hotel-building-concept.jpg"}
        width={400}
        height={200}
        alt={"/hotel-building-concept.jpg"}
        className="rounded-xl object-cover w-full h-50 shadow pb-2"
      />
      <SelectByIconOrganism items={SelectTravelList} onSend={onSend} />
      <SelectByIconOrganism items={SelectBudgetOptions} onSend={onSend} />
      <SelectDays />
      <FinalTripAction />
    </div>
  );
};

export default Page;
