"use client";

import { RiCheckboxCircleLine } from "react-icons/ri";

import Typography from "@/ui/design-system/typography/Typography";

const ListPoint = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-2">
      <RiCheckboxCircleLine size={24} className={"mt-0.5 text-secondary"} />
      <Typography variant="body-lg" component="span">
        {children}
      </Typography>
    </div>
  );
};

export default ListPoint;
