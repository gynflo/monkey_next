import Image from "next/image";

import Typography from "@/ui/design-system/typography/Typography";
import ListPoint from "./ListPointView";
import Button from "@/ui/design-system/button/Button";
import RiArrowRightLine from "@/ui/design-system/react-icons/RiArrowRightLine";

const HighLightListView = () => {
  return (
    <section className="py-24 space-y-10">
      <div className="flex justify-center gap-24">
        <div className="relative h-[350px] w-[520px] mt-10">
          <Image
            fill
            src={"/assets/svg/cake.svg"}
            alt="Illustration d'un cake"
          />
        </div>
        <div className="max-w-md space-y-7">
          <Typography variant="h3" component="h2">
            De novice à développeur en un clin d&apos;œil !
          </Typography>
          <div className="space-y-3">
            <ListPoint>Progresse rapidement.</ListPoint>
            <ListPoint>Inspire-toi .</ListPoint>
            <ListPoint>Gagne de l’assurance.</ListPoint>
          </div>

          <div className="relative inline-block">
            <Button baseUrl="/#" icon={{ icon: RiArrowRightLine }}>
              Let&apos; go
            </Button>
            <Image
              width={20}
              height={22}
              src={"/assets/svg/cursor.svg"}
              alt="Pointeur de souris"
              className="absolute right-9 -bottom-4"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse justify-center gap-24">
        <div className="relative h-[350px] w-[520px] mt-10">
          <Image
            fill
            src={"/assets/svg/toupie.svg"}
            alt="Illustration d'une toupie"
          />
        </div>
        <div className="max-w-md space-y-7">
          <Typography variant="h3" component="h2">
            Booste ta carrière de développeur
          </Typography>
          <div className="space-y-3">
            <ListPoint>Partage tes projets, obtiens des feedbacks.</ListPoint>
            <ListPoint>Connecte-toi, élargis ton réseau pro!</ListPoint>
            <ListPoint>Reste inspiré, motivé avec notre communauté.</ListPoint>
          </div>

          <div className="relative">
            <Button baseUrl="/#" variant="secondary">
              Démarrer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighLightListView;
