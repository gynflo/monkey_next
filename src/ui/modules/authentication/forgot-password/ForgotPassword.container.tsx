"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { ForgotPasswordFormFieldsType } from "@/types/form";
// Hooks
import { useToggle } from "@/hooks/use-toggle";
// Components
import ForgotPasswordView from "./ForgotPassword.view";
import { toast } from "react-toastify";

const ForgotPasswordContainer = () => {
  const router = useRouter();
  const { value: isLoading, setValue: setIsLoading } = useToggle({
    initial: false,
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<ForgotPasswordFormFieldsType>();

  const handleResetPassword = async ({
    email,
  }: ForgotPasswordFormFieldsType) => {
    setIsLoading(true);
    const response = await fetch(
      "/api/firebase/authentication/reset-password",
      {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const { error, message,success } = await response.json();
      setIsLoading(false);
      if (success) {
        router.push("/connexion");
        return toast.success(message);
      }

      return toast.error(error.message);
    }
  };

  const onSubmit: SubmitHandler<ForgotPasswordFormFieldsType> = async (
    formData
  ) => {
    handleResetPassword(formData);
  };

  return (
    <ForgotPasswordView
      form={{ isLoading, errors, register, handleSubmit, onSubmit }}
    />
  );
};

export default ForgotPasswordContainer;
