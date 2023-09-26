import { AppLinks } from "@/types";
import RiYoutubeFill from "@/ui/design-system/react-icons/RiYoutubeFill";
import RiLinkedinFill from "@/ui/design-system/react-icons/RiLinkedinFill";
import RiSlackFill from "@/ui/design-system/react-icons/RiSlackFill";
import { v4 as uuidv4 } from "uuid";

const footerAppLinks: Array<AppLinks> = [
  {
    id: uuidv4(),
    label: "Accueil",
    baseUrl: "/",
    type: "internal",
  },
  {
    id: uuidv4(),
    label: "Projets",
    baseUrl: "/projets",
    type: "internal",
  },
  {
    id: uuidv4(),
    label: "Coders Monkeys",
    baseUrl: "/#",
    type: "internal",
  },
  {
    id: uuidv4(),
    label: "Formations",
    baseUrl: "https://www.youtube.fr",
    type: "external",
  },
];

const footerUserLinks: Array<AppLinks> = [
  {
    id: uuidv4(),
    label: "Mon espace",
    baseUrl: "/#",
    type: "internal",
  },
  {
    id: uuidv4(),
    label: "Connexion",
    baseUrl: "/connexion",
    type: "internal",
  },
  {
    id: uuidv4(),
    label: "Inscription",
    baseUrl: "/inscription",
    type: "internal",
  },
  {
    id: uuidv4(),
    label: "Mot de passe oublié",
    baseUrl: "/mot-de-passe-perdu",
    type: "internal",
  },
];

const footerInfoLinks: Array<AppLinks> = [
  {
    id: uuidv4(),
    label: "CGU",
    baseUrl: "/#",
    type: "internal",
  },
  {
    id: uuidv4(),
    label: "Confidentialité",
    baseUrl: "/#",
    type: "internal",
  },
  {
    id: uuidv4(),
    label: "A propos",
    baseUrl: "/#",
    type: "internal",
  },
  {
    id: uuidv4(),
    label: "Contact",
    baseUrl: "/#",
    type: "internal",
  },
];

const footerSocialNetworksLinks: Array<AppLinks> = [
  {
    id: uuidv4(),
    label: "Youtube",
    baseUrl: "https://www.youtube.fr",
    type: "external",
    icon: RiYoutubeFill,
  },
  {
    id: uuidv4(),
    label: "Linkedin",
    baseUrl: "https://www.linkedin.com",
    type: "external",
    icon: RiLinkedinFill,
  },
  {
    id: uuidv4(),
    label: "Slack",
    baseUrl: "https://www.slack.com",
    type: "external",
    icon: RiSlackFill,
  },
];

interface FooteLinksProps {
  id: string;
  title: string;
  links: AppLinks[];
}

const footerLinks: Array<FooteLinksProps> = [
  {
    id: uuidv4(),
    title: "App",
    links: footerAppLinks,
  },
  {
    id: uuidv4(),
    title: "Utilisateurs",
    links: footerUserLinks,
  },
  {
    id: uuidv4(),
    title: "Formations",
    links: footerInfoLinks,
  },
  {
    id: uuidv4(),
    title: "Réseaux",
    links: footerSocialNetworksLinks,
  },
];

export { footerSocialNetworksLinks, footerLinks };
