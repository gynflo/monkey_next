import { footerSocialNetworksLinks } from "@/ui/components/footer/AppFooterLinks";
import Button from "@/ui/design-system/button/Button";

import clsx from "clsx";
import { IconType } from "react-icons";

interface SocialNetworksProps {
  className?: string;
  theme?: "accent" | "secondary" | "gray";
}

const SocialNetworks = ({
  className,
  theme = "accent",
}: SocialNetworksProps) => {
  const iconList = footerSocialNetworksLinks.map((socialNetwork) => (
    <Button
      key={socialNetwork.id}
      variant="ico"
      iconTheme={theme}
      icon={{ icon: socialNetwork.icon as IconType }}
      baseUrl={socialNetwork.baseUrl}
      linkType={socialNetwork.type}
    ></Button>
  ));

  return (
    <div className={clsx(className, "flex items-center gap-2.5")}>
      {iconList}
    </div>
  );
};

export default SocialNetworks;
