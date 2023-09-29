"use client";
import { toast } from "react-toastify";

import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterFormFieldsType } from "@/types/form";
// Components
import RegisterView from "./Register.view";
// Hooks
import { useToggle } from "@/hooks/use-toggle";
// Firebase
import {
  createUserByFirebase,
  sendEmailVerificationByFirebase,
} from "@/config/firebase/authentification";
import { createDocumentByFirestore } from "@/config/firestore";

const RegisterContainer = () => {
  const { value: isLoading, setValue: setIsLoading } = useToggle({
    initial: false,
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFieldsType>();

  const handleCreateUserDocument = async (
    collectionName: string,
    documentId: string,
    document: {}
  ) => {
    // ! Solution via les API à revoir, (currentUser & sendEmailVerification ne fonctionnent pas).
    /* const response = await fetch("/api/firestore/create-document", {
      method: "POST",
      body: JSON.stringify({ collectionName, documentId, document }),
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

      toast.success("Inscription réalisée avec succès");
      reset();
      await fetch("/api/firebase/authentication/send-email-verification");
    } */
    const { error } = await createDocumentByFirestore(
      collectionName,
      documentId,
      document
    );
    if (error) {
      toast.error(error.message);
      setIsLoading(false);
      return;
    }

    toast.success("Bienvenue sur l'app des singes codeurs");
    setIsLoading(false);
    reset();
    sendEmailVerificationByFirebase();
  };

  const handleCreateUserAuthentication = async ({
    email,
    password,
    howYouKnewUs,
  }: RegisterFormFieldsType) => {
    // ! Solution via les API à revoir, (currentUser & sendEmailVerification ne fonctionnent pas).
    /* const response = await fetch("/api/firebase/authentication/register", {
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

      const userDocument = {
        email: email,
        howYouKnewUs,
        uid: data.uid,
        created_date: new Date(),
      };

      handleCreateUserDocument("users", data.uid, userDocument);
    } */
    const { data, error } = await createUserByFirebase(email, password);

    if (error) {
      toast.error(error.message);
      return setIsLoading(false);
    }

    const userDocumentCreatedByFirebase = {
      email,
      howYouKnewUs,
      uid: data.uid,
      created_at: new Date(),
    };

    handleCreateUserDocument("users", data.uid, userDocumentCreatedByFirebase);
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
