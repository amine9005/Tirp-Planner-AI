import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import TanStackProvider from "@/providers/TanStackProvider";
import Footer1Organism from "@/components/ui/organisms/footers/Footer1.organism";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { CSSProperties } from "react";
import { serverSettingsQuery } from "@/hooks/queries/useSettingsQuery.hook";
import Navbar2Organism from "@/components/ui/organisms/navbars/Navbar2.organism";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Name",
  description: "3D developer, Blender 3D developer animator and creator ",
};

interface CustomCSS extends CSSProperties {
  "--primary": string;
  "--secondary": string;
  "--circle-color": string;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await serverSettingsQuery();

  const customStyle: CustomCSS = {
    "--primary": settings.primaryColor,
    "--secondary": settings.secondaryColor,
    "--circle-color": settings.circleColor,
  };

  return (
    <div className="mx-8">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <TanStackProvider>
          <Navbar2Organism />
          <html lang="en">
            <body className={`${inter.className} dark`} style={customStyle}>
              <Toaster />
              {children}
            </body>
          </html>
          <Footer1Organism />
        </TanStackProvider>
      </SkeletonTheme>
    </div>
  );
}
