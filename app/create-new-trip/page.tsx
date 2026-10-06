import ChatBoxAction from "@/components/ui/actions/AI/trip-planner/ChatBox.action";
import OneTwoLayout from "@/components/ui/layouts/OneTwo.layout";
import TripPlannerAction from "@/components/ui/actions/AI/trip-planner/TripPlanner.action";

const CreateNewTripPage = () => {
  return (
    <OneTwoLayout left={<ChatBoxAction />} right={<TripPlannerAction />} />
  );
};

export default CreateNewTripPage;
