"use client";
// import { redirect } from "next/navigation";
import { useCallback, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { LogoSchemaType } from "@/validations/logo.zod";
import { useLogoMutation } from "@/hooks/mutations/useLogoMutation.hook";

export function useLogoSubmit() {
  const [loading, setLoading] = useState(false);
  const { mutateAsync: updateLogo } = useLogoMutation();

  const onSubmit: SubmitHandler<LogoSchemaType> = useCallback(
    async (data) => {
      let success = false;
      setLoading(true);
      try {
        const fullName = data.fullName;
        const leftColor = data.leftColor;
        const rightColor = data.rightColor;
        const useImage = data.useImage;

        const imagePath = data.imagePath ? data.imagePath : null;

        await updateLogo({
          fullName,
          imagePath,
          useImage,
          leftColor,
          rightColor,
        });

        success = true;
        toast.success("Logo Updated Successfully");
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
        console.log(JSON.stringify(error));
      }
      setLoading(false);
      return success;
    },

    [updateLogo],
  );

  return { loading, onSubmit };
}
