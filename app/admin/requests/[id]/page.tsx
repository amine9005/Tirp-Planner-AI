import ViewProjectRequestAction from "@/components/ui/actions/project/requests/ViewProjectRequest.action";
import { authIsRequired } from "@/helpers/authHelper.helper";

const ViewRequest = async () => {
  await authIsRequired();
  return <ViewProjectRequestAction />;
};

export default ViewRequest;
