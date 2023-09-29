"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { LoginFormFieldsType } from "@/types/form";
// Hooks
import { useToggle } from "@/hooks/use-toggle";
import { useRouter } from "next/navigation";

// Components
import LoginView from "./Login.view";
import { signInUserByFirebase } from "@/config/firebase/authentification";

const LoginContainer = () => {
  const { value: isLoading, setValue: setIsLoading } = useToggle({
    initial: false,
  });
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormFieldsType>();

  const handleSignInUser = async ({ email, password }: LoginFormFieldsType) => {
    // ! Solution via les API à revoir, (currentUser & sendEmailVerification ne fonctionnent pas).
    /* const response = await fetch("/api/firebase/authentication/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setIsLoading(false);
      const { error } = await response.json();
      if (error) {
        return toast.error(error.message);
      }

      toast.success("Bienvenue sur l'application !");
      reset();
      return router.push("/mon-espace");
    } */
    const { error } = await signInUserByFirebase(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success("Bienvenue sur Coders Monkeys");
    reset();
    setIsLoading(false);
    router.push("/mon-espace");
  };

  const onSubmit: SubmitHandler<LoginFormFieldsType> = async (formData) => {
    setIsLoading(true);

    const { password } = formData;
    if (password.length <= 5) {
      setIsLoading(false);
      return setError("password", {
        type: "manual",
        message: "Ton mot de passe doit comporter au minimum 6 caractères.",
      });
    }

    setIsLoading(false);
    return handleSignInUser(formData);
  };

  return (
    <LoginView form={{ isLoading, errors, register, handleSubmit, onSubmit }} />
  );
};

export default LoginContainer;
