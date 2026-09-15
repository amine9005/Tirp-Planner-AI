import TwoSplitLayout from "@/components/ui/layouts/TwoSplitLayout.layout";
import ChatBoxOrganism from "@/components/ui/organisms/chatbox/ChatBox.organism";
import TripPlannerOrganism from "@/components/ui/organisms/tripPlanner/TripPlanner.organism";

const CreateNewTripPage = () => {
  return (
    <TwoSplitLayout
      left={<ChatBoxOrganism />}
      right={<TripPlannerOrganism />}
    />
  );
};

export default CreateNewTripPage;
