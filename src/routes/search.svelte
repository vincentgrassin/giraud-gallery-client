<script lang="ts">
	import { resources } from "../resources";
	import { dataAlbums } from "../dataPicture";
	import type { Picture } from "src/types";
	import PicturesGallery from "$lib/PicturesGallery.svelte";

	const allPictures = Object.values(dataAlbums).reduce((acc: Picture[], album) => {
		if (album.pictures) {
			const bestPictures = album.pictures.filter((picture) => picture.quality === 2);
			return [...acc, ...bestPictures];
		}
		return acc;
	}, []);
</script>

<div>
	<h1>{resources.bestOf}</h1>
	<PicturesGallery pictures={allPictures} />
</div>

<style></style>
