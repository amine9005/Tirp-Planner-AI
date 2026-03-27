import AllProjects from "@/components/ui/actions/project/AllProjects.action";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import { BlurFade } from "@/components/ui/Effects/blur-fade";
import GeneralLayout from "@/components/ui/layouts/GeneralLayout.layout";

const ProjectsPage = () => {
  return (
    <div className="hero-section">
      <GeneralLayout>
        <BlurFade onlyOnce={false} inView className="w-full" delay={0}>
          <H2 className="text-center mb-10" size={"3xl"}>
            My Projects
          </H2>
        </BlurFade>
        <AllProjects />
      </GeneralLayout>
    </div>
  );
};

export default ProjectsPage;
