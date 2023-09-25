import Button from "@/ui/design-system/button/Button";
import Typography from "@/ui/design-system/typography/Typography";
import Image from "next/image";
import RiArrowRightLine from "@/ui/design-system/react-icons/RiArrowRightLine";
import SocialNetworks from "@/ui/components/navigation/socialNetworks";
import Container from "@/ui/components/container/Container";

interface FeaturesData {
  id: string;
  imagePath: string;
  imageAlt: string;
  title: string;
  description: string;
}

const featuresData: Array<FeaturesData> = [
  {
    id: "1",
    imagePath: "/assets/svg/floppy.svg",
    imageAlt: "Illustration",
    title: "Ressources",
    description: "Consulte et partage des ressources pour les devs",
  },
  {
    id: "2",
    imagePath: "/assets/svg/gamepad.svg",
    imageAlt: "Illustration",
    title: "Entrainement",
    description: "Entraîne-toi à devenir meilleur et trouve de l’inspiration",
  },
  {
    id: "3",
    imagePath: "/assets/svg/speaker.svg",
    imageAlt: "Illustration",
    title: "Visibilité",
    description: "Expose tes projets et crée toi des opportunités !",
  },
  {
    id: "4",
    imagePath: "/assets/svg/compass.svg",
    imageAlt: "Illustration",
    title: "Relations",
    description: "Connecte-toi avec des devs web et booste ta carrière !",
  },
];

const FeaturedView = () => {
  const featuredList = featuresData.map((elmt) => (
    <div
      key={elmt.id}
      className="flex flex-col items-center justify-center bg-white rounded p-7"
    >
      <div className="relative h-[130px] w-[130px] rounded-full mb-6 p-10 overflow-hidden">
        <Image
          src={elmt.imagePath}
          alt={elmt.imageAlt}
          fill
          className="object-scale-down blur-2xl"
        />
        <Image
          src={elmt.imagePath}
          alt={elmt.imageAlt}
          fill
          className="object-scale-down"
        />
      </div>

      <Typography
        variant="lead"
        component="h3"
        weight="medium"
        className="text-center mb-2.5"
      >
        {elmt.title}
      </Typography>
      <Typography
        variant="body-base"
        component="p"
        theme="gray"
        className="text-center"
      >
        {elmt.description}
      </Typography>
    </div>
  ));

  return (
    <Container>
      <section className="bg-gray-300">
        <div className="grid grid-cols-12 gap-24 py-24">
          <div className="grid grid-cols-2 gap-7 col-span-7">
            {featuredList}
          </div>
          <div className="flex flex-col justify-between col-span-5">
            <div>
              <Typography variant="h2" component="h2" className="mb-5">
                L’endroit le plus cool pour devenir développeur
              </Typography>
              <Typography
                variant="body-lg"
                component="p"
                theme="gray"
                className="mb-8"
              >
                Du partage, des connexions et des formations notre app gère tout
                ça pour toi. Rejoins la communauté et grimpe en grade.
                Let&apos;s go !
              </Typography>
              <Button
                variant="secondary"
                baseUrl={""}
                icon={{ icon: RiArrowRightLine }}
              >
                Commencer
              </Button>
            </div>
            <div className="">
              <Typography
                variant="caption3"
                component="p"
                theme="gray"
                className="mb-2"
              >
                Nos réseaux sociaux
              </Typography>
              <SocialNetworks />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default FeaturedView;
