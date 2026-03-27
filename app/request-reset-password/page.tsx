import RequestResetPasswordAction from "@/components/ui/actions/forms/auth/RequestResetPassword.action";
import { authNotRequired } from "@/helpers/authHelper.helper";

const ResetPasswordPage = async () => {
  await authNotRequired();
  return <RequestResetPasswordAction />;
};

export default ResetPasswordPage;
