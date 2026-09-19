import ChatBoxAction from "@/components/ui/actions/AI/ChatBox.action";
import TwoSplitLayout from "@/components/ui/layouts/TwoSplitLayout.layout";
import TripPlannerOrganism from "@/components/ui/organisms/tripPlanner/TripPlanner.organism";

const CreateNewTripPage = () => {
  return (
    <TwoSplitLayout left={<ChatBoxAction />} right={<TripPlannerOrganism />} />
  );
};

export default CreateNewTripPage;
