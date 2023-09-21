import { clsx } from "clsx";
import Image from "next/image";

interface AvatarProps {
  size?: "small" | "medium" | "large";
  alt: string;
  src: string;
}

/**
 *  DEFAULT VALUE
 * @param {string} src
 * @param {string} alt
 * @param {string} size - medium
 *
 */

const Avatar = ({ size = "medium", alt, src }: AvatarProps) => {
  let sizeStyles: string;

  switch (size) {
    case "small":
      sizeStyles = "h-[24px] w-[24px]";
      break;
    case "medium": //DEFAULT
      sizeStyles = "h-[34px] w-[34px]";
      break;
    case "large":
      sizeStyles = "h-[50px] w-[50px]";
      break;
  }

  return (
    <div className={clsx(sizeStyles, "relative bg-gray-400 rounded-full ")}>
      <Image
        fill
        src={src}
        alt={alt}
        className="object-cover object-center rounded-full"
      />
    </div>
  );
};

export default Avatar;
