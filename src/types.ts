export type Picture = {
	id: string;
	staticPath: string;
	quality: number;
	height: number;
	width: number;
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

export type Tag = { label: string; albumIds: string[] };
