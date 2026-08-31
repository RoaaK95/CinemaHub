const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/";

export const getImageUrl = (path: string | null) => {
  if (!path) return;

  const imageSize = "w200";
  return `${BASE_IMAGE_URL}${imageSize}${path}`;
};
