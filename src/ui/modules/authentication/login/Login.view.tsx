import Image from "next/image";
import Link from "next/link";

import type { FormsType } from "@/types/form";
// Components
import Container from "@/ui/components/container/Container";
import Box from "@/ui/design-system/box/Box";
import Typography from "@/ui/design-system/typography/Typography";
import LoginForm from "./LoginForm";

interface LoginViewProps {
  form: FormsType;
}

const LoginView = ({ form }: LoginViewProps) => {
  return (
    <Container>
      <section className="grid grid-cols-2 gap-20 mb-32">
        <div className="relative w-full h-[531px] flex items-center">
          <Image
            className="object-scale-down"
            src={"/assets/images/character-2.png"}
            alt="illustration d'un homme vétu d'un habit bleu"
            fill
          />
        </div>
        <div className="flex items-center">
          <Box className="py-5">
            <div className="flex items-center justify-between">
              <Typography variant="h5" component="h1">
                Connexion
              </Typography>
              <div className="flex items-center gap-3">
                <Typography variant="caption4" component="span" theme="gray">
                  Tu n’as pas de compte ?
                </Typography>
                <Typography variant="caption4" component="span" theme="primary">
                  <Link href={"/inscription"}>S&apos;inscrire</Link>
                </Typography>
              </div>
            </div>
            <LoginForm form={form} />
            <Typography
              variant="caption4"
              component="p"
              theme="primary"
              className="text-center"
            >
              <Link href={"/mot-de-passe-perdu"}>mot de passe perdu ?</Link>
            </Typography>
          </Box>
        </div>
      </section>
    </Container>
  );
};

export default LoginView;
