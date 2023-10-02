"use client";

//Types
import type { SessionStatus } from "@/types/sessionStatus";

// Hooks
import { useAuth } from "@/context/AuthUSerContext";
import { useRouter } from "next/navigation";

//Components
import ScreenSpinner from "@/ui/design-system/spinner/ScreenSpinner";
import { SessionTypes } from "@/lib/sessionType";

interface SessionProps {
  children: React.ReactNode;
  sessionStatus?: SessionStatus;
}

const Session = ({ children, sessionStatus }: SessionProps) => {
  const { authUser, authUserIsLoading } = useAuth();
  const router = useRouter();

  if (!authUserIsLoading && sessionStatus === SessionTypes.REGISTERED) {
    if (authUser) {
      return <>{children}</>;
    } else {
      router.push("/connexion");
    }
  }

  if (!sessionStatus && !authUserIsLoading) {
    return <>{children}</>;
  }
  return <ScreenSpinner />;
};

export default Session;
