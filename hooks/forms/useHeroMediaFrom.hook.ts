import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { heroMediaSchema, heroMediaSchemaType } from "@/validations/hero.zod";
import { useHeroMediaQuery } from "@/hooks/queries/useHeroMediaQuery.hook";

export const useHeroMediaForm = () => {
  const form = useForm<heroMediaSchemaType>({
    resolver: zodResolver(heroMediaSchema),
    defaultValues: {
      displayType: "Image",
      videoSource: "Other",
      imageUrl: "",
      videoUrl: "",
      videoFileName: "",
      model3D_Url: "",
    },
  });

  return form;
};

export const useHeroMediaFormData = (
  form: UseFormReturn<heroMediaSchemaType>,
) => {
  const { data: heroData, isLoading } = useHeroMediaQuery();

  useEffect(() => {
    form.setValue(
      "displayType",
      heroData?.displayType
        ? heroData.displayType
        : form.getValues("displayType"),
    );
    form.setValue(
      "videoSource",
      heroData?.videoSource
        ? heroData.videoSource
        : form.getValues("videoSource"),
    );

    form.setValue(
      "videoUrl",
      heroData?.videoUrl ? heroData.videoUrl : form.getValues("videoUrl"),
    );
    form.setValue(
      "videoFileName",
      heroData?.videoFileName
        ? heroData.videoFileName
        : form.getValues("videoFileName"),
    );
    form.setValue(
      "imageUrl",
      heroData?.imageUrl ? heroData.imageUrl : form.getValues("imageUrl"),
    );
    form.setValue(
      "model3D_Url",
      heroData?.model3D_Url
        ? heroData.model3D_Url
        : form.getValues("model3D_Url"),
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
};
