"use client";

import { User, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/config/firebase.config";

import { UserDocument, UserInterface } from "@/types/user";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<UserInterface | null>(null);
  const [authUserIsLoading, setAuthUserIsLoading] = useState<boolean>(true);

  const formatAuthUser = (user: UserInterface) => ({
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    emailVerified: user.emailVerified,
    phoneNumber: user.phoneNumber,
    photoURL: user.photoURL,
  });

  const getUserDocument = async (user: UserInterface) => {
    if (auth.currentUser) {
      const documentRef = doc(db, "users", auth.currentUser.uid);
      const compactUser = user;
      onSnapshot(documentRef, async (doc) => {
        if (doc.exists()) {
          compactUser.userDocument = doc.data() as UserDocument;
        }
        setAuthUser((prevAuthUser) => ({
          ...prevAuthUser,
          ...compactUser,
        }));
        setAuthUserIsLoading(false);
      });
    }
  };

  const authStateChanged = async (authState: UserInterface | User | null) => {
    setAuthUserIsLoading(true);
    if (!authState) {
      setAuthUser(null);
      setAuthUserIsLoading(false);
      return ;
    }

    const formattedUser = formatAuthUser(authState);
    await getUserDocument(formattedUser);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    authUser,
    authUserIsLoading,
  };
}
