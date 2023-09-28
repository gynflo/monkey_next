export const dynamic = "force-static";
import { auth } from "@/config/firebase.config";
import { FirebaseError } from "firebase/app";
import { sendPasswordResetEmail } from "firebase/auth";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  try {
    await sendPasswordResetEmail(auth, email);

    return NextResponse.json({
      message: `Un Email de réinitialisation de mot de passe vient d'être envoyé à ${email}`,
      success: true,
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
