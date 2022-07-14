import { getStrapiURL } from "./api";

interface Media {
  data: {
    attributes: {
      url: string
    }
  }
}

interface Small {
  url: string
}

export function getStrapiMedia(media: Media) {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}

export function getStrapiMediaProfilePicture(small: Small) {
  const { url } = small;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}