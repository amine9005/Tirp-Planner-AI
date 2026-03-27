"use client";
import { sendContactMeEmailAction } from "@/app/api/actions/emails/emails.controller";
import { ContactMeSchemaType } from "@/validations/ContactMe.zod";
import { redirect } from "next/navigation";
import { useCallback, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useUpload } from "@/hooks/mutations/useUploadMutation.hook";
import { useSaveProjectRequest } from "@/hooks/mutations/useRequestProject.hook";

export function useContactMeSubmit(files?: FileList | null) {
  const [loading, setLoading] = useState(false);
  const { mutateAsync: upload } = useUpload();
  const { mutateAsync: saveProjectRequest } = useSaveProjectRequest();

  const onSubmit: SubmitHandler<ContactMeSchemaType> = useCallback(
    async (data) => {
      let success = false;
      const fileUrls: string[] = [];
      setLoading(true);
      try {
        const fullName = data.firstName + data.lastName;
        const email = data.email;
        const subject = data.subject;
        const description = data.description;

        if (files) {
          for (const file of files) {
            const response = await upload({ file: file, route: "CONTACT" });
            const { filename } = await response.json();
            fileUrls.push(filename);
          }
        }
        await saveProjectRequest({
          fullName,
          email,
          subject,
          description,
          fileUrls,
        });
        await sendContactMeEmailAction(fullName, email, subject, description);

        success = true;
        toast.success("Email was sent successfully");
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
        console.log(JSON.stringify(error));
      }
      setLoading(false);
      if (success) {
        redirect("/");
      }
    },

    [files, saveProjectRequest, upload],
  );

  return { loading, onSubmit };
}
