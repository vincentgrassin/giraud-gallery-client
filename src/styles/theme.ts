const greyScale = {
	whiteSmokeGrey: "#F0F0F0",
	veryLightGrey: "#E8E8E8",
	lightGrey: "#D3D3D3",
	silverGrey: "#C0C0C0",
	mediumGrey: "#B8B8B8",
	darkGrey: "#A9A9A9",
	mediumDarkGrey: "#808080",
	veryDarkGrey: "#696969",
	jetGrey: "#353535"
};

export const colors = {
	babyBlue: "#88CCF1",
	columbiaBlue: "#C1DFF0",
	munsellBlue: "#3587A4",
	metallicBlue: "#2D848A",
	sunglowYellow: "#FDCA40",
	xiketicBlack: "#0D0106",
	...greyScale,
	white: "#ffffff",
	golden: "#DB9D47",
	// golden: "#DB9D47",
	eerieBlack: "#201F1E",
	black: "#00000",
	redwood: "#A64253",
	zomp: "#43AA8B"
};

export const fontSize = {
	fontSizeMedium: "1rem",
	fontSizeMediumBig: "1.5rem",
	fontSizeBig: "2rem",
	fontSizeVeryBig: "3rem"
};

export const fontFamily = {
	handwriting: "Caveat"
};

export const spacing = {};

export const sizes = {
	headerHeight: "140px",
	navHeight: "64px",
	footerHeight: "60px"
};

export const theme = Object.entries({
	...colors,
	...fontSize,
	...spacing,
	...sizes,
	...fontFamily
})
	.map(([key, value]) => `--${key}:${value}`)
	.join(";");
