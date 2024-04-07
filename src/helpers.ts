import type { Picture } from "./types";

export const environnement = {
	basePath: import.meta.env.BASE_URL,
	isProduction: import.meta.env.PROD,
	apiUrl: import.meta.env.VITE_PUBLIC_BASE_PATH
};
export const apiBaseUrl = environnement.apiUrl;

export const buildImageStaticPath = (picture: Picture | undefined, level = 0) => {
	if (!picture) {
		return "";
	}
	if (level === 0) {
		return `images/giraud-images/${picture.staticPath}.webp`;
	}
	if (level === 1) {
		return `../images/giraud-images/${picture.staticPath}.webp`;
	}
};

export const buildThumbnailPath = (picture: Picture | undefined, level = 0) => {
	if (!picture) {
		return "";
	}
	if (level === 0) {
		return `images/giraud-images/${picture.staticPath}-thumbnail.webp`;
	}
	if (level === 1) {
		return `../images/giraud-images/${picture.staticPath}-thumbnail.webp`;
	}
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
	md: 1260
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
	const options = ["", "-alt", "-alt1", "-alt2"];
	const randomIndex = Math.floor(Math.random() * options.length);
	return options[randomIndex];
}

export function getIndexInAlphabet(letter: string) {
	letter = letter.toUpperCase();

	if (letter.length !== 1 || !/[A-Z]/.test(letter)) {
		return "Invalid input. Please enter a single letter.";
	}

	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const index = alphabet.indexOf(letter) + 1;

	return index;
}

export const cleanText = (text: string) => text.toLowerCase().trim();

export function countLetterOccurrences(word: string | null, letter: string) {
	if (!word) return 0;
	word = word.toLowerCase();
	letter = letter.toLowerCase();

	let count = 0;

	for (let i = 0; i < word.length; i++) {
		if (word[i] === letter) {
			count++;
		}
	}

	return count;
}
