"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterFormFieldsType } from "@/types/form";

import RegisterView from "./Register.view";

const RegisterContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFieldsType>();

  const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
    setIsLoading(true);
    /**
     *  TODO: Implémentez la logique du formulaire
     *
     */
  };

  return (
    <RegisterView
      form={{ isLoading, errors, register, handleSubmit, onSubmit }}
    />
  );
};

export default RegisterContainer;
