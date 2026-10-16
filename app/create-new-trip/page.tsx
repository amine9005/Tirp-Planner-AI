"use client";
import ChatBoxAction from "@/components/ui/actions/AI/trip-planner/ChatBox.action";
import OneTwoLayout from "@/components/ui/layouts/OneTwo.layout";
import TripPlannerAction from "@/components/ui/actions/trip-planner/TripPlanner.action";
import { useEffect, useState } from "react";
import { Loader2Icon } from "lucide-react";
import { P } from "@/components/ui/atoms/text/Text";

const CreateNewTripPage = () => {
  const [smallScreen, setSmallScreen] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // console.log("window size: ", window.innerWidth);

      if (window.innerWidth > 600) {
        setSmallScreen(false);
      }
      setLoading(false);
    };
    handleResize();
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center gap-4">
          <Loader2Icon className="animate-spin size-10" />
          <P>Loading...</P>
        </div>
      </div>
    );
  }

  if (smallScreen) {
    return <ChatBoxAction />; // Render ChatBoxAction on small screen
  }

  return (
    <OneTwoLayout
      left={<ChatBoxAction />}
      right={<TripPlannerAction />}
    ></OneTwoLayout>
  );
};

export default CreateNewTripPage;
