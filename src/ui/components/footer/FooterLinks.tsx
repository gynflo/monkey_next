import type { AppLinks } from "@/types";
import { LinkTypes } from "@/lib/linkType";
// Components
import ActiveLink from "../navigation/ActiveLink";
import Typography from "@/ui/design-system/typography/Typography";

interface FooterAppLinksProps {
  title: string;
  data: AppLinks[];
}

const FooterLinks = ({ data, title }: FooterAppLinksProps) => {
  const links = data.map((elmt) => (
    <div key={elmt.id}>
      {elmt.type === LinkTypes.INTERNAL ? (
        <ActiveLink href={elmt.baseUrl}>{elmt.label}</ActiveLink>
      ) : (
        <a href={elmt.baseUrl} target="_blank">
          {elmt.label}
        </a>
      )}
    </div>
  ));

  return (
    <div className="min-w-[190px]">
      <Typography
        theme="white"
        variant="caption1"
        weight="medium"
        className="pb-5"
      >
        {title}
      </Typography>
      <Typography
        variant="caption2"
        theme="gray"
        weight="medium"
        className="space-y-4"
      >
        {links}
      </Typography>
    </div>
  );
};

export default FooterLinks;
