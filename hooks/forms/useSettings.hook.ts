import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { settingsSchema, SettingsSchemaType } from "@/validations/settings.zod";
import { useSettingsQuery } from "@/hooks/queries/useSettingsQuery.hook";

export const useSettingsForm = () => {
  const form = useForm<SettingsSchemaType>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      copyright: "",
      primaryColor: "#fff",
      secondaryColor: "#fff",
      circleColor: "#fff",
      useCircle: false,
    },
  });

  return form;
};

export const useSettingsFormData = (
  form: UseFormReturn<SettingsSchemaType>,
) => {
  const { data: settingsData, isLoading } = useSettingsQuery();

  useEffect(() => {
    form.setValue(
      "copyright",
      settingsData?.copyright
        ? settingsData.copyright
        : form.getValues("copyright"),
    );
    form.setValue(
      "primaryColor",
      settingsData?.primaryColor
        ? settingsData.primaryColor
        : form.getValues("primaryColor"),
    );
    form.setValue(
      "secondaryColor",
      settingsData?.secondaryColor
        ? settingsData.secondaryColor
        : form.getValues("secondaryColor"),
    );
    form.setValue(
      "circleColor",
      settingsData?.circleColor
        ? settingsData.circleColor
        : form.getValues("circleColor"),
    );
    form.setValue(
      "useCircle",
      settingsData?.useCircle
        ? settingsData.useCircle
        : form.getValues("useCircle"),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
};
