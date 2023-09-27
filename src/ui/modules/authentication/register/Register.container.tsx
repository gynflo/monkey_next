"use client";
import { toast } from "react-toastify";

import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterFormFieldsType } from "@/types/form";

import RegisterView from "./Register.view";
import { useToggle } from "@/hooks/use-toggle";

const RegisterContainer = () => {
  const {
    value: isLoading,
    setValue: setIsLoading,
  } = useToggle({ initial: false });

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFieldsType>();

  const handleCreateUserAuthentication = async ({
    email,
    password,
    howYouKnewUs,
  }: RegisterFormFieldsType) => {
    const response = await fetch("/api/firebase/authentication/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const { data, error } = await response.json();

      if (error) {
        setIsLoading(false);
        return toast.error(error.message);
      }
      //* TODO create user document
      setIsLoading(false);
      toast.success("Inscription réalisée avec succès");
      reset();
    }
  };

  const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
    setIsLoading(true);
    const { password }: { password: string } = formData;

    if (password.length <= 5) {
      setIsLoading(false);
      return setError("password", {
        type: "manual",
        message: "Ton mot de passe doit comporter au minimum 6 caractères.",
      });
    }

    handleCreateUserAuthentication(formData);
  };

  return (
    <RegisterView
      form={{ isLoading, errors, register, handleSubmit, onSubmit }}
    />
  );
};

export default RegisterContainer;
