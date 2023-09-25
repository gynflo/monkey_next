import Image from "next/image";

import { LinkTypes } from "@/lib/linkType";
import Button from "@/ui/design-system/button/Button";
import Logo from "@/ui/design-system/logo/Logo";
import Typography from "@/ui/design-system/typography/Typography";
import Container from "@/ui/components/container/Container";

const CodersMonkeySlackView = () => {
  return (
    <Container>
      <section className="flex justify-between">
        <div className="flex flex-col justify-center max-w-2xl space-y-5">
          <div className="flex items-center gap-2">
            <Logo size="very-small" />
            <Typography variant="caption2" component="span" weight="medium">
              Coders Monkeys
            </Typography>
          </div>
          <Typography variant="h2" component="h2">
            Rejoins-nous sur le Slack des Singes codeurs
          </Typography>
          <Typography
            variant="body-lg"
            component="p"
            theme="gray"
            className="max-w-lg"
          >
            Rejoins-nous et obtiens de l’aide, des conseils et pourquoi pas des
            nouveaux potes !
          </Typography>
          <Button baseUrl="/#" linkType={LinkTypes.EXTERNAL}>
            Rejoindre le groupe d&apos;aide
          </Button>
        </div>

        <div className="relative h-[600px] w-[600px]">
          <Image
            src={"/assets/svg/logo_slack.svg"}
            alt="Illustration du logo Slack"
            fill
          />
        </div>
      </section>
    </Container>
  );
};

export default CodersMonkeySlackView;
