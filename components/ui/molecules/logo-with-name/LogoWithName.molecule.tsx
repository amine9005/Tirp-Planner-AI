"use server";
import { CSSProperties } from "react";
import DynamicImage from "@/components/ui/molecules/Dynamic-image/DynamicImage.molecule";
import { serverLogoQuery } from "@/hooks/queries/useLogoQuery.hook";

const LogoWithNameMolecule = async () => {
  const { leftColor, rightColor, fullName, imagePath, useImage } =
    await serverLogoQuery();

  const spanStyle: CSSProperties = {
    backgroundImage: `linear-gradient(0.25turn, ${leftColor},  ${rightColor})`,
    backgroundClip: "text",
    color: "transparent",
  };

  return (
    <div className="flex justify-start items-center bg-linear-to">
      {" "}
      {useImage && (
        <DynamicImage
          className="mr-3 rounded-full"
          alt="logo"
          folder="logos"
          imageName={imagePath}
          width={24}
          height={24}
        />
      )}
      <span style={spanStyle}>{fullName}</span>
    </div>
  );
};

export default LogoWithNameMolecule;
