import EditProjectSteps from "@/components/ui/actions/project/EditProjectSteps.action";

import { authIsRequired } from "@/helpers/authHelper.helper";

const EditProjectPage = async () => {
  await authIsRequired();
  return <EditProjectSteps />;
};

export default EditProjectPage;
