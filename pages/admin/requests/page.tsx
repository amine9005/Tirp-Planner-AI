import ProjectRequestsList from "@/components/ui/actions/project/requests/ProjectRequestsList.action";
import { authIsRequired } from "@/helpers/authHelper.helper";

const RequestsPage = async () => {
  await authIsRequired();
  return <ProjectRequestsList />;
};

export default RequestsPage;
