"use client";
import { memo } from "react";
import FormLayout from "@/components/ui/layouts/Form.layout";
import EditLogoCard from "@/components/ui/organisms/cards/edit-logo/EditLogo.card";
import { useLogoForm, useLogoFormData } from "@/hooks/forms/useLogoForm.hook";
import { useLogoSubmit } from "@/hooks/submit/useLogoSubmit.hook";

const EditLogoAction = () => {
  const form = useLogoForm();
  useLogoFormData(form);

  const { handleSubmit } = form;
  const { onSubmit, loading } = useLogoSubmit();

  const card = { title: "Update Your Logo", description: "" };
  const formName = "TitleAndLogo-Form";

  return (
    <FormLayout>
      {" "}
      <EditLogoCard
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
