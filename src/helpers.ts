import type { Picture } from "./types";

export const environnement = {
	basePath: import.meta.env.BASE_URL,
	isProduction: import.meta.env.PROD,
	apiUrl: import.meta.env.VITE_PUBLIC_BASE_PATH
};
export const apiBaseUrl = environnement.apiUrl;

export const buildImageLocatorUrl = (picture: Picture) => {
	if (!picture) {
		return "";
	}
	return `https://res.cloudinary.com/dyivtryy7/image/upload/v1652346037/${picture.cloudinaryPublicId}.jpg`;
};
