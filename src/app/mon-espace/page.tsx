import type { Metadata } from "next";

import UserAccount from "@/ui/modules/userProfile/userAccount/UserAccount.container";

export const metadata: Metadata = {
  title: "Mon Espace",
  description: "Mon Espace",
};

const MonEspace = () => {
  return <UserAccount></UserAccount>;
};

export default MonEspace;
