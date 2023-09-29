import { Timestamp } from "firebase/firestore";

export interface UserDocument {
  uid: string;
  email: string;
  howYouKnewUs: string;
  creation_date: Timestamp;
}

export interface UserInterface {
  email: string | null;
  uid: string;
  displayName: string | null;
  emailVerified: boolean;
  phoneNumber: string | null;
  photoURL: string | null;
  userDocument?: UserDocument;
}


