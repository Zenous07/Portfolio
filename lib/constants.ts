export const ASSETS_URL = "https://ik.imagekit.io/zen07/Portfolio";

export const getAssetUrl = (path: string) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${ASSETS_URL}/${cleanPath}`;
};
