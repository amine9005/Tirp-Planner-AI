"use client";
import { memo } from "react";
import FormLayout from "@/components/ui/layouts/Form.layout";
import {
  useSettingsForm,
  useSettingsFormData,
} from "@/hooks/forms/useSettings.hook";
import { useSettingsSubmit } from "@/hooks/submit/useSettingsSubmit.hook";
import EditSettingsCard from "@/components/ui/organisms/cards/settings/Settings.card";

const EditSettingsAction = () => {
  const form = useSettingsForm();
  useSettingsFormData(form);

  const { handleSubmit } = form;
  const { onSubmit, loading } = useSettingsSubmit();

  const card = { title: "Edit Your Site Settings", description: "" };
  const formName = "Hero-Form";

  return (
    <FormLayout>
      {" "}
      <EditSettingsCard
        loading={loading}
        form={form}
        card={card}
        formName={formName}
        handle_submit={handleSubmit(onSubmit)}
      />
    </FormLayout>
  );
};

export default memo(EditSettingsAction);
