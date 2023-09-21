import Logo from "@/ui/design-system/logo/Logo";
import Typography from "@/ui/design-system/typography/Typography";
import Button from "@/ui/design-system/button/Button";
import ActiveLink from "./ActiveLink";

interface NavigationProps {}

const Navigation = ({}: NavigationProps) => {
  return (
    <div className="border-b-2 border-400">
      <nav className="w-full max-w-7xl mx-auto px-5 lg:px-10  flex items-center justify-between gap-7  py-1.5 ">
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
            <Button size="small" variant="secondary" iconTheme="secondary">
              Connexion
            </Button>
            <Button size="small">Rejoindre</Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
