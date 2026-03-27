"use client";
import { memo } from "react";
import FormLayout from "@/components/ui/layouts/Form.layout";
import {
  useHeroTextForm,
  useHeroTextFormData,
} from "@/hooks/forms/useHeroTextForm.hook";
import EditHeroTextCard from "@/components/ui/organisms/cards/edit-hero/EditHeroText.card";
import { useHeroTextSubmit } from "@/hooks/submit/useHeroTextSubmit.hook";

const EditLogoAction = () => {
  const form = useHeroTextForm();
  useHeroTextFormData(form);

  const { handleSubmit } = form;
  const { onSubmit, loading } = useHeroTextSubmit();

  const card = { title: "Edit Your Hero Text", description: "" };
  const formName = "Hero-Form";

  return (
    <FormLayout>
      {" "}
      <EditHeroTextCard
        loading={loading}
        form={form}
        card={card}
        formName={formName}
        handle_submit={handleSubmit(onSubmit)}
      />
    </FormLayout>
  );
};

export default memo(EditLogoAction);
