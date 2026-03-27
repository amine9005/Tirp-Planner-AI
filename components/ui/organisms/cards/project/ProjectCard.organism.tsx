"use client";
import { Button } from "@/components/ui/atoms/button/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/card/card";
import { MagicCard } from "@/components/ui/Effects/magic-card";
import ProjectCardContent from "./ProjectCardContent.organism";
import { ProjectType } from "@/types/project.types";

interface Card {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

interface Props {
  card: Card;
  project: ProjectType;
}

const ProjectCard = ({ card, project }: Props) => {
  return (
    <Card className="w-full max-w-xl border-none p-0 shadow-none hover:scale-105 cursor-pointer  transition-transform duration-300">
      <MagicCard gradientSize={300} className="p-0">
        <CardHeader className="border-border border-b p-4 [.border-b]:pb-4">
          <CardTitle className="text-center">{card.title}</CardTitle>
          <CardDescription className="text-center">
            {card.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <ProjectCardContent project={project} />
        </CardContent>
        <CardFooter className="border-border border-t p-4 [.border-t]:pt-4">
          <Button width={"full"}>Learn More</Button>
        </CardFooter>
      </MagicCard>
    </Card>
  );
};

export default ProjectCard;
