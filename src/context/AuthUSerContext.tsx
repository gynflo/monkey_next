"use client";

import useFirebaseAuth from "@/hooks/use-firebase-auth";
import { UserDocument, UserInterface } from "@/types/user";
import { createContext, useContext } from "react";

const init = {
  email: "",
  uid: "",
  displayName: "",
  emailVerified: false,
  phoneNumber: "",
  photoURL: "",
  userDocument: {} as UserDocument,
};

// * Création du context
const authUserContext = createContext({
  authUser: init,
  authUserIsLoading: true,
});

// * Création du provider
export const AuthUserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const auth = useFirebaseAuth();

  return (
    <authUserContext.Provider
      value={{
        authUser: auth.authUser as {
          uid: string;
          email: string;
          displayName: string;
          emailVerified: boolean;
          phoneNumber: string;
          photoURL: string;
          userDocument: UserDocument;
        },
        authUserIsLoading: auth.authUserIsLoading,
      }}
    >
      {children}
    </authUserContext.Provider>
  );
};

// *
export const useAuth = () => useContext(authUserContext);
