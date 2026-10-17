import CreateNewTripPage from "@/components/protected-pages/trip-planner/CreateNewTrip.page";
import { authIsRequired } from "@/helpers/authHelper.helper";

const page = async () => {
  await authIsRequired();
  return <CreateNewTripPage />;
};

export default page;
