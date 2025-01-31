"use client";

import { useForm } from "react-hook-form";
import { CardContent } from "../ui/card";
import { Form } from "../ui/form";
import { signUpSchema, SignUpSchema } from "@/schema/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProviderSignInBtns } from "./ProviderSignInBtns";

export const SignUpCardContent = () => {
  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  return (
    <CardContent>
      <Form {...form}>
        <ProviderSignInBtns signInCard={false}></ProviderSignInBtns>
        <form></form>
      </Form>
    </CardContent>
  );
};
