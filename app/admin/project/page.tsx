import ProjectList from "@/components/ui/actions/project/ProjectList.action";
import { authIsRequired } from "@/helpers/authHelper.helper";

export default async function DemoPage() {
  await authIsRequired();

  return <ProjectList />;
}
