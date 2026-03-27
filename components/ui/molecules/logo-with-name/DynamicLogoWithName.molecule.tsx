import { CSSProperties } from "react";
import DynamicImage from "@/components/ui/molecules/Dynamic-image/DynamicImage.molecule";

interface Props {
  imageUrl: string | undefined;
  leftColor: string;
  rightColor: string;
  name: string;
  useImage: boolean;
}

const DynamicLogoWithNameMolecule = ({
  imageUrl,
  leftColor,
  rightColor,
  name,
  useImage,
}: Props) => {
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
          imageName={imageUrl}
          width={24}
          height={24}
        />
      )}
      <span style={spanStyle}>{name}</span>
    </div>
  );
};

export default DynamicLogoWithNameMolecule;
