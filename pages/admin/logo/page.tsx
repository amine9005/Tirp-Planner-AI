import EditLogoAction from "@/components/ui/actions/forms/edit-logo/EditLogo.action";
import { authIsRequired } from "@/helpers/authHelper.helper";

const LogoPage = async () => {
  await authIsRequired();
  return <EditLogoAction />;
};

export default LogoPage;
