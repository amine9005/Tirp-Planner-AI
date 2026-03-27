"use client";
import FormLayout from "../../layouts/Form.layout";
import { schemaType, useBugReportForm } from "@/validations/bugReport.zod";
import { memo } from "react";
import { BugReportFormCard } from "@/components/ui/organisms/BugReport/BugReportCard.organism";

const BugReportFormActions = () => {
  const form = useBugReportForm();
  const card = { title: "Bug Report", description: "" };
  const handle_submit = (formData: schemaType) => {
    console.log(JSON.stringify(formData));
  };

  const handle_reset = () => {
    form.reset();
  };

  return (
    <FormLayout>
      {" "}
      <BugReportFormCard
        form={form}
        card={card}
        formName="bug-report"
        handle_submit={handle_submit}
        handle_reset={handle_reset}
      />
    </FormLayout>
  );
};

export default memo(BugReportFormActions);
