import { LinkType } from "@/lib/linkType";
import { IconType } from "react-icons";

export interface AppLinks {
  id: string;
  label: string;
  baseUrl: string;
  type: LinkType;
  icon?: IconType;
}
