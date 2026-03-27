"use client";
import { useProjectVideosSubmit } from "@/hooks/submit/useProjectSubmit.hook";
import { useProjectVideosForm } from "@/hooks/forms/useProjectForm.hook";
import AddProjectVideoCard from "@/components/ui/organisms/cards/project/form/AddProjectVideos.card";
interface Props {
  nextStep: () => void;
  previousStep: () => void;
}
const AddProjectVideosAction = ({ nextStep, previousStep }: Props) => {
  const card = { title: "Add Project Videos", description: "" };

  const form = useProjectVideosForm();

  const formName = "addProjectVideo-Form";
  const { handleSubmit } = form;
  const { onSubmit } = useProjectVideosSubmit(nextStep);

  return (
    <AddProjectVideoCard
      loading={false}
      previousStep={previousStep}
      form={form}
      card={card}
      formName={formName}
      handle_submit={handleSubmit(onSubmit)}
    />
  );
};

export default AddProjectVideosAction;
