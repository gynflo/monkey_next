export const dynamic = "force-static";
import { auth } from "@/config/firebase.config";
import { FirebaseError } from "firebase/app";
import { signOut } from "firebase/auth";

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await signOut(auth);
    return NextResponse.json({
      message: "Vous êtes déconnecté ",
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
