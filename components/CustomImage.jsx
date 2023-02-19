import Image from "next/image";

export default function CustomImage({ src, alt, width, height }) {
  return <Image src={src} alt={alt} width={width} height={height} />;
}

CustomImage.defaultProps = {
  alt: "",
  width: 800,
  height: 600,
};
