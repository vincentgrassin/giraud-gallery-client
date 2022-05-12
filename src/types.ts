  export type  Picture = {
    id: number;
    externalPublicId: string;
    externalId: string;
    name: string;
    description?: string;
    tags?: string[];
    isQuality: boolean;
    date?: string;
    createdAt: Date;
    album: Album;
    height: number;
    width: number;
  }

  export type Album = {
    id: number;
    publicId: string;
    createdAt: Date;
    name: string;
    date?: string;
    numberId: string;
    pictures?: Picture[];
    coverPicture: Picture;
  }
  