"use server";
import Image from "next/image";
import { ImageImporter } from "@/helpers/ImageImporter";

interface asyncImageProps {
  folder: string; // Folder where the image is located
  imageName: string; // Name of the image file
  alt: string; // Alternative text for the image
  width: number; // Width of the image
  height: number; // Height of the image
  className?: string; // Additional CSS class for styling the image
}

const AsyncImage = async ({
  folder,
  imageName,
  alt,
  width,
  height,
  className,
}: asyncImageProps) => {
  const imageUrl = await ImageImporter(folder, imageName);
  return (
    imageUrl && (
      <Image
        src={imageUrl}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    )
  );
};

export default AsyncImage;
