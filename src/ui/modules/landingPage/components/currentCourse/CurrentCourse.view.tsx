import Container from "@/ui/components/container/Container";
import Typography from "@/ui/design-system/typography/Typography";
import Image from "next/image";
import RiPlayCircleLine from "@/ui/design-system/react-icons/RiPlayCircleLine";

const CurrentCourseView = () => {
  return (
    <div className="bg-gray-300">
      <Container className="py-24 text-center">
        <Typography
          variant="h2"
          component="h2"
          weight="medium"
          className="mb-2.5"
        >
          Formations React.js gratuite
        </Typography>
        <Typography
          variant="lead"
          component="h3"
          weight="medium"
          className="mb-5"
        >
          Apprends à coder l’app des singes codeurs
        </Typography>
        <Typography
          variant="caption3"
          component="p"
          theme="gray"
          className="mb-16"
        >
          Si tu veux un CV plus sexy que ton ex, suis cette formation complète !
        </Typography>

        <a href="/#" target="_blank">
          <div className="relative h-[626px] bg-gray-400 rounded">
            <div className="relative h-full flex flex-col items-center justify-center gap-3 bg-gray-800 rounded z-10 opacity-0 hover:opacity-95 animate text-white">
              <RiPlayCircleLine size={42} />
              <Typography
                variant="caption2"
                theme="white"
                className="uppercase"
              >
                Lire la formation
              </Typography>
            </div>
            <Image
              className="object-cover object-center rounded"
              src={"/assets/images/current-course.png"}
              alt="Illustration des projets des singes codeurs"
              fill
            />
          </div>
        </a>
      </Container>
    </div>
  );
};

export default CurrentCourseView;
