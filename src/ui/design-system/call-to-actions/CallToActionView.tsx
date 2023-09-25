import { LinkTypes } from "@/lib/linkType";
import Button from "../button/Button";
import Typography from "../typography/Typography";
import Container from "@/ui/components/container/Container";
import Image from "next/image";

const CallToActionView = () => {
  return (
    <section className="relative overflow-hidden bg-primary">
      <Container className="py-20">
        <div className="relative z-10 max-w-3xl space-y-5">
          <Typography variant="h2" component="h2" theme="white">
            N’attends pas pour développer tes compétences...
          </Typography>
          <div>
            <Button
              baseUrl="/#"
              linkType={LinkTypes.EXTERNAL}
              variant="success"
            >
              Formation React.js gratuite
            </Button>
          </div>
        </div>

        <div>
          <Image
            className="absolute -bottom-[485px] -right-[100px]"
            src={"/assets/svg/bomb.svg"}
            alt="Illustration d'un bombe façon pétard"
            height={1210}
            width={1210}
          />
        </div>
      </Container>
    </section>
  );
};

export default CallToActionView;
