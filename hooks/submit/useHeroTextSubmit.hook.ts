"use client";
// import { redirect } from "next/navigation";
import { useCallback, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useHeroTextMutation } from "@/hooks/mutations/useHeroTextMutation.hook";
import { heroTextSchemaType } from "@/validations/hero.zod";

export function useHeroTextSubmit() {
  const [loading, setLoading] = useState(false);
  const { mutateAsync: updateHeroText } = useHeroTextMutation();

  const onSubmit: SubmitHandler<heroTextSchemaType> = useCallback(
    async (data) => {
      let success = false;
      setLoading(true);
      try {
        const fullName = data.fullName;
        const leftColor = data.leftColor;
        const rightColor = data.rightColor;
        const description = data.description;
        const title = data.title;

        await updateHeroText({
          fullName,
          description,
          title,
          leftColor,
          rightColor,
        });

        success = true;
        toast.success("Hero Text Updated Successfully");
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
        console.log(JSON.stringify(error));
      }
      setLoading(false);
      return success;
    },

    [updateHeroText],
  );

  return { loading, onSubmit };
}
