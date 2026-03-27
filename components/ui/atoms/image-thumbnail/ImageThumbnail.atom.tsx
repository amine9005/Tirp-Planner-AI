import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const ImageThumbnailAtom = ({ src, alt, width, height }: Props) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width ? width : 64}
      height={height ? height : 40}
    />
  );
};

export default ImageThumbnailAtom;
