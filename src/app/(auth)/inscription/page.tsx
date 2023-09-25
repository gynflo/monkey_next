import type { Metadata } from "next";

import RegisterContainer from "@/ui/modules/authentication/register/Register.container";

export const metadata: Metadata = {
  title: "Inscription",
  description: "Envie de vous inscrire ? ",
};

const RegisterPage = () => {
  return <RegisterContainer />;
};

export default RegisterPage;
