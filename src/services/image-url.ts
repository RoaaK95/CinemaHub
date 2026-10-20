const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/";
import noImage from "../assets/Image_placeholder.png";

export const getImageUrl = (path: string | null) => {
  if (!path) return noImage;

  const imageSize = "w200";
  return `${BASE_IMAGE_URL}${imageSize}${path}`;
};
