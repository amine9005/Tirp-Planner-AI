import ChatBoxAction from "@/components/ui/actions/AI/ChatBox.action";
import OneTwoLayout from "@/components/ui/layouts/OneTwo.layout";
import TripPlannerAction from "@/components/ui/actions/AI/TripPlanner.action";

const CreateNewTripPage = () => {
  return (
    <OneTwoLayout left={<ChatBoxAction />} right={<TripPlannerAction />} />
  );
};

export default CreateNewTripPage;
