import { getStrapiMedia } from "../lib/media";
import NextImage from "next/image";

const Image = ({ image }: Props) => {
  const { alternativeText, width, height } = image.data.attributes;

  return (
    <NextImage
      layout="responsive"
      width={width}
      height={height}
      objectFit="contain"
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  );
};

interface Props {
  image: {
    data: {
      attributes: {
        width: number,
        height: number,
        alternativeText: string,
        url: string,
      }
    }
  }
}

export default Image;