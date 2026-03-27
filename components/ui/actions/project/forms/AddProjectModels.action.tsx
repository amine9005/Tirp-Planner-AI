"use client";
import { useProjectModelsSubmit } from "@/hooks/submit/useProjectSubmit.hook";
import { useProjectModelsForm } from "@/hooks/forms/useProjectForm.hook";
import AddProjectModelCard from "@/components/ui/organisms/cards/project/form/AddProjectModels.card";
interface Props {
  nextStep: () => void;
  previousStep: () => void;
}
const AddProjectModelsAction = ({ nextStep, previousStep }: Props) => {
  const card = { title: "Add Project Models", description: "" };

  const form = useProjectModelsForm();
  const formName = "addProjectModel-Form";
  const { handleSubmit } = form;
  const { onSubmit } = useProjectModelsSubmit(nextStep);

  return (
    <AddProjectModelCard
      loading={false}
      previousStep={previousStep}
      form={form}
      card={card}
      formName={formName}
      handle_submit={handleSubmit(onSubmit)}
    />
  );
};

export default AddProjectModelsAction;
