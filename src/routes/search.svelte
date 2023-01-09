<script lang="ts">
	import { resources } from "../resources";
	import { dataAlbums } from "../dataPicture";
	import type { Picture } from "src/types";
	import PicturesGallery from "$lib/PicturesGallery.svelte";
	import { shuffleArray } from "../helpers";
	import Title from "$lib/Title.svelte";

	const allPictures = Object.values(dataAlbums).reduce((acc: Picture[], album) => {
		if (album.pictures) {
			const bestPictures = album.pictures.filter((picture) => picture.quality === 2);
			return [...acc, ...bestPictures];
		}
		return acc;
	}, []);
</script>

<div class="selection">
	<Title title={resources.bestOf} />
	<PicturesGallery pictures={shuffleArray(allPictures)} />
</div>

<style>
	.selection {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
