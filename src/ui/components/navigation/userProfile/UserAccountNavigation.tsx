"use client";

import { toast } from "react-toastify";
// Components
import Button from "@/ui/design-system/button/Button";

import Box from "@/ui/design-system/box/Box";
import Typography from "@/ui/design-system/typography/Typography";
import ActiveLink from "../ActiveLink";

const UserAccountNavigation = () => {
  const handleClickUserLogout = async () => {
    const response = await fetch("api/firebase/authentication/logout");
    if (response.ok) {
      const { data, message } = await response.json();

      if (data) {
        toast.success(message);
      }
    }
  };

  return (
    <Box className="flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <Typography variant="caption2" weight="medium">
          <ActiveLink href="/mon-espace">Mon Espace</ActiveLink>
        </Typography>
        <Typography variant="caption2" weight="medium">
          <ActiveLink href="/projets">Mes Projets</ActiveLink>
        </Typography>
      </div>
      <Button action={handleClickUserLogout} variant="danger">
        Déconnexion
      </Button>
    </Box>
  );
};

export default UserAccountNavigation;
