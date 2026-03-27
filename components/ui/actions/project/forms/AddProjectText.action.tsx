"use client";
import { useProjectTextForm } from "@/hooks/forms/useProjectForm.hook";
import { useProjectTextSubmit } from "@/hooks/submit/useProjectSubmit.hook";
import AddProjectTextCard from "@/components/ui/organisms/cards/project/form/AddProjectText.card";
import { useParams } from "next/navigation";

interface Props {
  nextStep: () => void;
}

const AddProjectTextAction = ({ nextStep }: Props) => {
  const { id } = useParams();

  const card = {
    title: id ? "Edit Project Details" : "Add Project Details",
    description: "",
  };

  const form = useProjectTextForm();
  const formName = "addProjectText-Form";
  const { handleSubmit } = form;
  const { onSubmit } = useProjectTextSubmit(nextStep);

  return (
    <AddProjectTextCard
      loading={false}
      form={form}
      card={card}
      formName={formName}
      handle_submit={handleSubmit(onSubmit)}
    />
  );
};

export default AddProjectTextAction;
