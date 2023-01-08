import type { Picture } from "./types";

export const environnement = {
	basePath: import.meta.env.BASE_URL,
	isProduction: import.meta.env.PROD,
	apiUrl: import.meta.env.VITE_PUBLIC_BASE_PATH
};
export const apiBaseUrl = environnement.apiUrl;

export const buildImageLocatorUrl = (picture: Picture | undefined) => {
	if (!picture) {
		return "";
	}
	return `https://res.cloudinary.com/dyivtryy7/image/upload/v1652346037/${picture.cloudinaryPublicId}.jpg`;
};

export default function keyboard(node: HTMLElement, params: any) {
	// params.shortcut
	function handleKeyDown(e: KeyboardEvent) {
		Object.keys(params.shortcut).forEach((key) => {
			if (e.code === key) {
				if (Array.isArray(params.shortcut[key])) {
					params.shortcut[key].forEach((fn: (e: KeyboardEvent) => void) => fn(e));
				} else {
					params.shortcut[key](e);
				}
			}
		});
	}

	node.addEventListener("keydown", handleKeyDown);

	return {
		destroy() {
			node.removeEventListener("keydown", handleKeyDown);
		}
	};
}

export const getGallerySizeRatio = (screenWidth: number) => {
	if (screenWidth < 760) {
		return 1;
	}
	if (screenWidth >= 760 && screenWidth < 1200) {
		return 0.8;
	}
	if (screenWidth >= 1200) {
		return 0.5;
	}

	return 0.5;
};
