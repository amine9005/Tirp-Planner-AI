"use client";
// import { redirect } from "next/navigation";
import { useCallback, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { SettingsSchemaType } from "@/validations/settings.zod";
import { useSettingsMutation } from "@/hooks/mutations/useSettingsMutation.hook";

export function useSettingsSubmit() {
  const [loading, setLoading] = useState(false);
  const { mutateAsync: updateSettings } = useSettingsMutation();

  const onSubmit: SubmitHandler<SettingsSchemaType> = useCallback(
    async (data) => {
      let success = false;
      setLoading(true);
      try {
        const copyright = data.copyright;
        const primaryColor = data.primaryColor;
        const secondaryColor = data.secondaryColor;
        const useCircle = data.useCircle;
        const circleColor = data.circleColor;

        await updateSettings({
          copyright,
          useCircle,
          circleColor,
          primaryColor,
          secondaryColor,
        });

        success = true;
        toast.success("Site Settings Updated Successfully");
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
        console.log(JSON.stringify(error));
      }
      setLoading(false);
      return success;
    },

    [updateSettings],
  );

  return { loading, onSubmit };
}
