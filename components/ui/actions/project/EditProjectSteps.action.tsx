"use client";
import {
  InteractiveStepper,
  InteractiveStepperContent,
  InteractiveStepperDescription,
  InteractiveStepperIndicator,
  InteractiveStepperItem,
  InteractiveStepperSeparator,
  InteractiveStepperTitle,
  InteractiveStepperTrigger,
  IStepperMethods,
} from "@/components/ui/molecules/stepper/Stepper.atom";
import { useRef } from "react";
import AddProjectImagesAction from "./forms/AddProjectImages.action";
import AddProjectTextAction from "./forms/AddProjectText.action";
import AddProjectVideosAction from "./forms/AddProjectVideos.action";
import AddProjectModelsAction from "./forms/AddProjectModels.action";
import AddProjectSettingsAction from "./forms/AddProjectSetting.action";
import { useParams } from "next/navigation";
import { useGetProjectByIdQuery } from "@/hooks/queries/useProjectQuery.hook";
import { useSetProjectDataInStore } from "@/hooks/forms/useProjectForm.hook";
import { Loader2Icon } from "lucide-react";
import { P } from "@/components/ui/atoms/text/Text";

const EditProjectSteps = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useGetProjectByIdQuery(id as string);
  const { setProjectDataInStore } = useSetProjectDataInStore();

  console.log("edit project data ", data);

  const stepperRef = useRef<HTMLDivElement & IStepperMethods>(null);
  const addProjectSteps = [
    {
      title: "Project Details",
      description: "",
    },
    {
      title: "Project Images",
      description: "",
    },
    {
      title: "Project Videos",
      description: "",
    },
    {
      title: "Project Models",
      description: "",
    },
    {
      title: "Finish",
      description: "",
    },
  ];

  const nextStep = () => {
    if (itemRefs.current) {
      const currentStep = stepperRef.current?.currentStep || 1;
      const totalSteps = stepperRef.current?.totalSteps || 1;
      let index = currentStep + 1;
      if (currentStep + 1 > totalSteps) {
        index = totalSteps;
      }
      stepperRef.current?.goToStep(index);
      if (itemRefs.current) {
        itemRefs.current[index]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }
    }
  };

  const previousStep = () => {
    const currentStep = stepperRef.current?.currentStep || 1;
    let index = currentStep - 1 || 1;
    if (index === 0) {
      index = 1;
    }
    stepperRef.current?.goToStep(index);
    if (itemRefs.current) {
      itemRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  const itemRefs = useRef<HTMLDivElement[] | null>([]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center gap-4">
          <Loader2Icon className="animate-spin size-10" />
          <P>Loading...</P>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex justify-center items-center h-screen p-16">
        <P size={"xl"} variant={"error"}>
          {"Failed To Load Project."}
        </P>
      </div>
    );
  }

  setProjectDataInStore(data);

  return (
    <div className="flex justify-center mt-4">
      <div className="w-11/12 max-w-4xl">
        <InteractiveStepper ref={stepperRef}>
          {addProjectSteps.map((value, index) => (
            <InteractiveStepperItem
              key={index}
              ref={(el) => {
                if (itemRefs.current) {
                  if (el) {
                    itemRefs.current[index] = el;
                  }
                }
              }}
            >
              <InteractiveStepperTrigger disableClickToStep={true}>
                <InteractiveStepperIndicator />
                <div>
                  <InteractiveStepperTitle>
                    {value.title}
                  </InteractiveStepperTitle>
                  <InteractiveStepperDescription>
                    {value.description}
                  </InteractiveStepperDescription>
                </div>
              </InteractiveStepperTrigger>
              <InteractiveStepperSeparator />
            </InteractiveStepperItem>
          ))}

          <InteractiveStepperContent
            step={1}
            className="flex justify-center items-center mt-10"
          >
            <AddProjectTextAction nextStep={nextStep} />
          </InteractiveStepperContent>

          <InteractiveStepperContent
            step={2}
            className="flex justify-center items-center mt-10"
          >
            <AddProjectImagesAction
              nextStep={nextStep}
              previousStep={previousStep}
            />
          </InteractiveStepperContent>

          <InteractiveStepperContent
            step={3}
            className="flex justify-center items-center mt-10"
          >
            <AddProjectVideosAction
              nextStep={nextStep}
              previousStep={previousStep}
            />
          </InteractiveStepperContent>

          <InteractiveStepperContent
            step={4}
            className="flex justify-center items-center mt-10"
          >
            <AddProjectModelsAction
              nextStep={nextStep}
              previousStep={previousStep}
            />
          </InteractiveStepperContent>

          <InteractiveStepperContent
            step={5}
            className="flex justify-center items-center mt-10"
          >
            <AddProjectSettingsAction
              previousStep={previousStep}
              id={id as string}
            />
          </InteractiveStepperContent>
        </InteractiveStepper>
      </div>
    </div>
  );
};

export default EditProjectSteps;
