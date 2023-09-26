import Image from "next/image";
import Link from "next/link";

import type { FormsType } from "@/types/form";
// Components
import Container from "@/ui/components/container/Container";
import Box from "@/ui/design-system/box/Box";
import Typography from "@/ui/design-system/typography/Typography";
import RegisterForm from "./Register.form";


interface RegisterViewProps {
  form: FormsType;
}

const RegisterView = ({ form }: RegisterViewProps) => {
  return (
    <Container>
      <section className="grid grid-cols-2 gap-20 mb-32">
        <div className="relative w-full h-[531px] flex items-center">
          <Image
            className="object-scale-down"
            src={"/assets/images/character-1.png"}
            alt="illustration d'un homme vétu d'un habit jaune"
            fill
          />
        </div>
        <div className="flex items-center">
          <Box className="py-5">
            <div className="flex items-center justify-between">
              <Typography variant="h5" component="h1">
                Inscription
              </Typography>
              <div className="flex items-center gap-3">
                <Typography variant="caption4" component="span" theme="gray">
                  Tu as déjà un compte ?
                </Typography>
                <Typography variant="caption4" component="span" theme="primary">
                  <Link href={"/connexion"}> Connexion</Link>
                </Typography>
              </div>
            </div>
            <RegisterForm form={form} />
          </Box>
        </div>
      </section>
    </Container>
  );
};

export default RegisterView;
