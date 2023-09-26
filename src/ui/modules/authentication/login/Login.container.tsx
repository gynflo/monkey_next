"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormFieldsType } from "@/types/form";

import LoginView from "./Login.view";

const LoginContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormFieldsType>();

  const onSubmit: SubmitHandler<LoginFormFieldsType> = async (formData) => {
    setIsLoading(true);
    console.log(
      "🚀 ~ file: Login.container.tsx:22 ~ constonSubmit:SubmitHandler<LoginFormFieldsType>= ~ formData:",
      formData
    );

    /**
     *  TODO: Implémentez la logique du formulaire
     *
     */
  };

  return (
    <LoginView form={{ isLoading, errors, register, handleSubmit, onSubmit }} />
  );
};

export default LoginContainer;
