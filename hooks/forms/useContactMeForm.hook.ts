"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContactMeSchema,
  ContactMeSchemaType,
} from "@/validations/ContactMe.zod";

export const useContactMe = () => {
  const form = useForm<ContactMeSchemaType>({
    resolver: zodResolver(ContactMeSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      description: "",
    },
  });

  return form;
};
