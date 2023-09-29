export const dynamic = "force-static";
import { auth } from "@/config/firebase.config";
import { FirebaseError } from "firebase/app";
import { sendEmailVerification } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  if(!auth.currentUser) {
    console.log('Aucun utilisateur')
    return null
  };
 
  try {
    await sendEmailVerification(auth.currentUser);

    return NextResponse.json({
      data: true,
    });
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
