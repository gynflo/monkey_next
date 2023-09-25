"use client";

import { usePathname } from "next/navigation";
import { RiHome2Line } from "react-icons/ri";
import clsx from "clsx";
import Link from "next/link";

import Typography from "@/ui/design-system/typography/Typography";
import Container from "../container/Container";

const BreadCrumbs = () => {
  const pathname = usePathname();
  const segment = pathname.split("/");
  const lastSegment = segment[segment.length - 1];
  segment[0] = "Accueil";

  // segments.slice(1, index +1).join('/')
  const view = segment.map((path, index) => (
    <div key={path}>
      <Link href={index > 0 ? `/${path}` : "/"}>
        <Typography
          variant="caption3"
          component="span"
          className={clsx(
            path !== lastSegment ? "text-gray-600" : "text-gray",
            "capitalize hover:text-gray animate"
          )}
        >
          {path !== "Accueil" ? (
            path.replace(/-/g, " ")
          ) : (
            <RiHome2Line className="inline -mt-1" />
          )}
        </Typography>
        {path !== lastSegment && (
          <Typography
            variant="caption2"
            component="span"
            className="ml-2 text-gray-600"
          >
            /
          </Typography>
        )}
      </Link>
    </div>
  ));

  return <Container className="flex items-center gap-2 py-7">{view}</Container>;
};

export default BreadCrumbs;
