"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgotPasswordFormFieldsType } from "@/types/form";

import ForgotPasswordView from "./ForgotPassword.view";

const ForgotPasswordContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<ForgotPasswordFormFieldsType>();

  const onSubmit: SubmitHandler<ForgotPasswordFormFieldsType> = async (
    formData
  ) => {
    setIsLoading(true);
    /**
     *  TODO: Implémentez la logique du formulaire
     *
     */
  };

  return (
    <ForgotPasswordView
      form={{ isLoading, errors, register, handleSubmit, onSubmit }}
    />
  );
};

export default ForgotPasswordContainer;
