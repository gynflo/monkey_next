import { auth } from "../../firebase.config";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";

export async function createUserByFirebase(email: string, password: string) {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { data: userCredentials.user };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    /**
     * TODO Define format error
     */
    return {
      error: {
        code: firebaseError.code,
        message: firebaseError.message,
      },
    };
  }
}

export async function sendEmailVerificationByFirebase() {
  if (auth.currentUser) {
    try {
      await sendEmailVerification(auth.currentUser);
      return { data: true };
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return {
        error: {
          code: firebaseError.code,
          message: firebaseError.message,
        },
      };
    }
  } else {
    return {
      error: {
        code: "Unknown",
        message: "Une erreur est survenue",
      },
    };
  }
}

export async function signInUserByFirebase(email: string, password: string) {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return {
      data: userCredentials.user,
    };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    /**
     * TODO Define format error
     */
    return {
      error: {
        code: firebaseError.code,
        message: firebaseError.message,
      },
    };
  }
}

export async function signOutUserByFirebase() {
  try {
    await signOut(auth);
    return { data: true };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return {
      error: {
        code: firebaseError.code,
        message: firebaseError.message,
      },
    };
  }
}

export async function sendEmailToResetPassword(email: string) {
  try {
    await sendPasswordResetEmail(auth, email);
    return { data: true };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return {
      error: {
        code: firebaseError.code,
        message: firebaseError.message,
      },
    };
  }
}
