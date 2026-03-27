"use client";
import { useProjectImagesForm } from "@/hooks/forms/useProjectForm.hook";
import { useProjectImagesSubmit } from "@/hooks/submit/useProjectSubmit.hook";
import AddProjectImageCard from "@/components/ui/organisms/cards/project/form/AddProjectImages.card";
interface Props {
  nextStep: () => void;
  previousStep: () => void;
}
const AddProjectImagesAction = ({ nextStep, previousStep }: Props) => {
  const card = { title: "Add Project Images", description: "" };

  const form = useProjectImagesForm();
  const formName = "addProjectImage-Form";
  const { handleSubmit } = form;
  const { onSubmit } = useProjectImagesSubmit(nextStep);

  return (
    <AddProjectImageCard
      loading={false}
      previousStep={previousStep}
      form={form}
      card={card}
      formName={formName}
      handle_submit={handleSubmit(onSubmit)}
    />
  );
};

export default AddProjectImagesAction;
