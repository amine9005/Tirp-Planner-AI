"use client";
import { memo } from "react";
import FormLayout from "@/components/ui/layouts/Form.layout";

import EditHeroMediaCard from "@/components/ui/organisms/cards/edit-hero/EditHeroMedia.card";
import {
  useHeroMediaForm,
  useHeroMediaFormData,
} from "@/hooks/forms/useHeroMediaFrom.hook";
import { useHeroMediaSubmit } from "@/hooks/submit/useHeroMediaSubmit.hook";

const EditLogoAction = () => {
  const form = useHeroMediaForm();
  useHeroMediaFormData(form);

  const { handleSubmit } = form;
  const { onSubmit, loading } = useHeroMediaSubmit();

  const card = { title: "Edit Your Hero Media", description: "" };
  const formName = "Hero-Form";

  return (
    <FormLayout>
      {" "}
      <EditHeroMediaCard
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
