"use client";

// Context
import { useAuth } from "@/context/AuthUSerContext";
// Components
import Logo from "@/ui/design-system/logo/Logo";
import Typography from "@/ui/design-system/typography/Typography";
import Button from "@/ui/design-system/button/Button";
import ActiveLink from "./ActiveLink";
import Container from "../container/Container";

interface NavigationProps {}

const Navigation = ({}: NavigationProps) => {
  const { authUser } = useAuth();
  console.log(
    "🚀 ~ file: Navigation.tsx:16 ~ Navigation ~ authUser:",
    authUser
  );

  return (
    <nav className="border-b-2 border-400">
      <Container className="flex items-center justify-between gap-7  py-1.5 ">
        <div className="flex items-center gap-2.5 ">
          <div>
            <ActiveLink href={"/"}>
              <Logo size="small" />
            </ActiveLink>
          </div>
          <div className="flex flex-col">
            <div className="text-gray font-extrabold text-[24px]">
              Coders Monkeys
            </div>
            <Typography variant="caption4" theme="gray" component="span">
              Trouve de l’inspiration & reçois des feedbacks !
            </Typography>
          </div>
        </div>

        <div className="flex items-center gap-7">
          <Typography
            variant="caption3"
            component="div"
            className="flex items-center gap-7"
          >
            <ActiveLink href={"/design-system"}>Design-System</ActiveLink>
            <ActiveLink href={"/projets"}>Projets</ActiveLink>
            <ActiveLink href={"/formation"}>Formation</ActiveLink>
            <ActiveLink href={"/contact"}>Contact</ActiveLink>
          </Typography>
          <div className="flex items-center gap-2">
            <Button
              size="small"
              variant="secondary"
              iconTheme="secondary"
              baseUrl="/connexion"
            >
              Connexion
            </Button>
            <Button size="small" baseUrl="/inscription">
              Rejoindre
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
