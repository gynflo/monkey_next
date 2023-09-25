import type { Metadata } from "next";

import ForgotPasswordContainer from "@/ui/modules/authentication/forgot-password/ForgotPassword.container";

export const metadata: Metadata = {
  title: "Mot de passe Perdu",
  description: "L'endroit idéal pour réinitialiser son mot de passe ",
};

const ForgetPassword = () => {
  return <ForgotPasswordContainer />;
};

export default ForgetPassword;
