import { doc, setDoc, updateDoc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { db } from "@/config/firebase.config";

export async function createDocumentByFirestore(
  collectionName: string,
  documentID: string,
  document: object
) {
  try {
    const refDocument = doc(db, collectionName, documentID);
    await setDoc(refDocument, document);
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
