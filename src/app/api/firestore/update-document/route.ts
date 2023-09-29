export const dynamic = "force-static";
import { db } from "@/config/firebase.config";
import { doc, updateDoc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { FirebaseError } from "firebase/app";


export async function UPDATE(request: NextRequest, _: NextResponse) {
  const { collectionName, documentID, document } = await request.json();

  try {
    const documentRef = doc(db, collectionName, documentID);
    await updateDoc(documentRef, document);
    return NextResponse.json({ data: true });
  } catch (error) {
    const firebaseError = error as FirebaseError;
    /*
     * TODO Format error in french
     */

    return NextResponse.json({
      error: {
        code: firebaseError.code,
        message: firebaseError.message,
      },
      message: "This not Worked",
      success: false,
    });
  }
}

