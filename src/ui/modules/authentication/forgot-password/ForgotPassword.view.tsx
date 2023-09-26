import Image from "next/image";
import Link from "next/link";

import type { FormsType } from "@/types/form";
// Components
import Container from "@/ui/components/container/Container";
import Box from "@/ui/design-system/box/Box";
import Typography from "@/ui/design-system/typography/Typography";
import ForgotPasswordForm from "./ForgotPassword.form";

interface ForgotPasswordViewProps {
  form: FormsType;
}

const ForgotPasswordView = ({ form }: ForgotPasswordViewProps) => {
  return (
    <Container>
      <section className="grid grid-cols-2 gap-20 mb-32">
        <div className="relative w-full h-[531px] flex items-center">
          <Image
            className="object-scale-down"
            src={"/assets/images/character-3.png"}
            alt="illustration d'un homme vétu d'un habit rouge"
            fill
          />
        </div>
        <div className="flex items-center">
          <Box className="py-5">
            <div className="flex items-center justify-between">
              <Typography variant="h5" component="h1">
                Mot de passe perdu ?
              </Typography>
              <div className="flex items-center gap-3">
                <Typography variant="caption4" component="span" theme="primary">
                  <Link href={"/connexion"}>Connexion</Link>
                </Typography>
              </div>
            </div>
            <ForgotPasswordForm form={form} />
          </Box>
        </div>
      </section>
    </Container>
  );
};

export default ForgotPasswordView;
