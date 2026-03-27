import VerifyEmailAction from "@/components/ui/actions/forms/auth/VerifyEmail.action";
import { authNotRequired } from "@/helpers/authHelper.helper";

const VerifyEmailPage = async () => {
  await authNotRequired();

  return <VerifyEmailAction />;
};

export default VerifyEmailPage;
