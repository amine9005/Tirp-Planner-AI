import EditHeroMediaAction from "@/components/ui/actions/forms/edit-hero/EditHeroMedia.action";
import { authIsRequired } from "@/helpers/authHelper.helper";

const AdminHeroPage = async () => {
  await authIsRequired();
  return <EditHeroMediaAction />;
};

export default AdminHeroPage;
