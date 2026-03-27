// import { ImageImporter } from "@/helpers/ImageImporter";
// import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
// import { useEffect, useState } from "react";

interface asyncImageProps {
  folder: string; // Folder where the image is located
  imageName: string | undefined; // Name of the image file
  alt: string; // Alternative text for the image
  width: number; // Width of the image
  height: number; // Height of the image
  className?: string; // Additional CSS class for styling the image
}

export default function DynamicImage({
  folder,
  imageName,
  alt,
  width,
  height,
  className,
}: asyncImageProps) {
  if (!imageName) {
    return (
      <div
        className="bg-gray-600 animate-pulse rounded-lg mr-3"
        style={{ width, height }}
      />
    );
  }

  return (
    <Image
      className={className}
      src={"/" + folder + "/" + imageName}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
