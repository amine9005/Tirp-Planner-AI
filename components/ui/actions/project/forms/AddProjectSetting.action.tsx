"use client";
import { useProjectSettingForm } from "@/hooks/forms/useProjectForm.hook";
import { useProjectSettingAndSubmit } from "@/hooks/submit/useProjectSubmit.hook";
import AddProjectSettingsCard from "@/components/ui/organisms/cards/project/form/AddProjectSettings.card";

interface Props {
  previousStep: () => void;
  id?: string;
}

const AddProjectSettingsAction = ({ previousStep, id }: Props) => {
  const card = { title: "Set Project Settings", description: "" };

  const form = useProjectSettingForm();
  const formName = "addProjectSetting-Form";
  const { handleSubmit } = form;
  const { onSubmit, loading } = useProjectSettingAndSubmit(id);

  return (
    <AddProjectSettingsCard
      loading={loading}
      form={form}
      card={card}
      previousStep={previousStep}
      formName={formName}
      handle_submit={handleSubmit(onSubmit)}
    />
  );
};

export default AddProjectSettingsAction;
