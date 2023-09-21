import type { Metadata } from "next";
import { clsx } from "clsx";

// Fonts
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import Navigation from "@/ui/components/navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | gynflo.next",
    default: "Coders Monkey Gynflo",
  },
  description: "Practice on Next.js ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navigation />
        <div className="w-full max-w-7xl mx-auto px-5 lg:px-10">{children}</div>
      </body>
    </html>
  );
}
