import "@/styles/globals.css";
import type { Metadata } from "next";
// Fonts
import { Inter } from "next/font/google";
// Components
import Navigation from "@/ui/components/navigation/Navigation";
import Footer from "@/ui/components/footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | gynflo.next",
    default: "Coders Monkey | gynflo.next",
  },
  description: "Practice on Next.js ",
};

export default function RootLayout(
  {
    children,
  }: {
    children: React.ReactNode;
  }
) {

  
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
