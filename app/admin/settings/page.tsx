import EditSettingsAction from "@/components/ui/actions/forms/settings/Settings.actions";
import { authIsRequired } from "@/helpers/authHelper.helper";

const RequestsPage = async () => {
  await authIsRequired();
  return <EditSettingsAction />;
};

export default RequestsPage;
