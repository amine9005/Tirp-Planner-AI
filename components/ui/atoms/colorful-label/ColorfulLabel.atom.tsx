"use client";
import { CSSProperties } from "react";

interface Props {
  leftColor: string;
  rightColor: string;
  className?: string;
  name: string;
}

const ColorfulLabelAtom = ({
  leftColor,
  rightColor,
  name,
  className,
}: Props) => {
  const spanStyle: CSSProperties = {
    backgroundImage: `linear-gradient(0.25turn, ${leftColor},  ${rightColor})`,
    backgroundClip: "text",
    color: "transparent",
  };

  return (
    <span className={className} style={spanStyle}>
      {name}
    </span>
  );
};

export default ColorfulLabelAtom;
