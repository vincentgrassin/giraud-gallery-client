export type Picture = {
	id: string;
	staticPath: string;
	cloudinaryId: string;
	quality: number;
	height: number | null;
	width: number | null;
};

export type Album = {
	id: string;
	name: string;
	date?: string | null;
	startYear?: number | null;
	endYear?: number | null;
	number: number;
	coverPicture: string;
	pictures?: Picture[];
	description: string | null;
	isDiary?: boolean;
};
export type NavigationTab = {
	label: string;
	id: string;
	path?: string;
	regex?: string;
	children?: NavigationTab[];
};
