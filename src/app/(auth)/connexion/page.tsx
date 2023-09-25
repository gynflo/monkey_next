import type { Metadata } from "next";

import LoginContainer from "@/ui/modules/authentication/login/Login.container";

export const metadata: Metadata = {
  title: "Connexion",
  description: "Page de Connexion",
};

const LoginPage = () => {
  return <LoginContainer />;
};

export default LoginPage;
