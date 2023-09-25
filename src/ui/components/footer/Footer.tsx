import Typography from "@/ui/design-system/typography/Typography";
import Image from "next/image";
import FooterLinks from "./FooterLinks";

import { footerLinks } from "./AppFooterLinks";
import SocialNetworks from "../navigation/socialNetworks";
import Container from "../container/Container";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray">
      <Container className="flex justify-between pt-16">
        <div className="flex flex-col items-center gap-1">
          <Typography variant="caption1" theme="white" weight="medium">
            Formations gratuites
          </Typography>
          <Typography variant="caption3" theme="gray">
            Abonne-toi à la chaine !
          </Typography>
          <a href="https://youtube.com" target="_blank">
            <Image
              src={"/assets/svg/YTB.svg"}
              alt="Illustration et lien du logo youtube"
              height={216}
              width={229}
            />
          </a>
        </div>
        <div className="flex  gap-7">
          {footerLinks.map((footerLink) => (
            <FooterLinks
              key={footerLink.id}
              title={footerLink.title}
              data={footerLink.links}
            />
          ))}
        </div>
      </Container>

      <div className="w-full max-w-7xl mx-auto px-5 lg:px-10 pt-9 pb-11 space-y-11">
        <hr className="text-gray-800" />
        <div className="flex items-center justify-between">
          <Typography variant="caption4" component="div" theme="gray">
            {`Copyright © ${currentYear}`}|
            <a
              href="https://www.gynflo.site"
              target="_blank"
              className="underliner m-2"
            >
              Propulsed by Florian Ginet
            </a>
            - Gynflo Web
          </Typography>

          <div className="">
            <SocialNetworks theme="gray" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
