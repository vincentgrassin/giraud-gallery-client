export type Picture = {
	id: string;
	cloudinaryPublicId: string;
	cloudinaryId: string;
	quality: number;
	height: number;
	width: number;
};

export type Album = {
	id: string;
	name: string;
	date?: string;
	startYear?: number | null;
	endYear?: number | null;
	number: number;
	coverPicture: string;
	pictures?: Picture[];
};
export type NavigationTab = {
	label: string;
	id: string;
	path: string;
	regex: string;
};
