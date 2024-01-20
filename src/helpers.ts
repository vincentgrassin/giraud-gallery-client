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

export const breakpoints = {
	sm: 760,
	md: 1200
};

export const getGallerySizeRatio = (screenWidth: number) => {
	const { sm, md } = breakpoints;
	if (screenWidth < sm) {
		return 1;
	}
	if (screenWidth >= sm && screenWidth < md) {
		return 0.8;
	}
	if (screenWidth >= md) {
		return 0.5;
	}

	return 0.5;
};

export function shuffleArray<T>(array: T[]) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

export function shuffleGridDisplayKey() {
	const options = ["", "-alt", "-alt1"];
	const randomIndex = Math.floor(Math.random() * options.length);
	return options[randomIndex];
}
