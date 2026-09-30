import ChatBoxAction from "@/components/ui/actions/AI/ChatBox.action";
import OneTwoLayout from "@/components/ui/layouts/OneTwo.layout";
import TripPlannerOrganism from "@/components/ui/organisms/tripPlanner/TripPlanner.organism";

const CreateNewTripPage = () => {
  return (
    <OneTwoLayout left={<ChatBoxAction />} right={<TripPlannerOrganism />} />
  );
};

export default CreateNewTripPage;
