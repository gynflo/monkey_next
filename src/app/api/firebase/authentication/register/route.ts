//export const dynamic = "force-static";
import { auth } from "@/config/firebase.config";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return NextResponse.json({ data: user });
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
