<script context="module" lang="ts">
	import type { Load } from "@sveltejs/kit";
	import { dataAlbums } from "../dataPicture";

	export const load: Load = async () => {
		const albums = Object.values(dataAlbums);
		if (albums) {
			return {
				props: {
					albums
				}
			};
		}
		return {
			error: new Error("could not find")
		};
	};
</script>

<script lang="ts">
	import type { Album } from "../types";
	import { resources } from "../resources";
	import AlbumCard from "$lib/AlbumCard.svelte";
	import Title from "$lib/Title.svelte";
	import TextBloc from "$lib/TextBloc.svelte";
	export let albums: Album[];
</script>

<div class="container">
	<Title title={resources.albums} />
	<TextBloc content={resources.albumDescribe} />
	<TextBloc content={resources.aboutAlbums} />

	<ul class="album-grid">
		{#each albums as album}
			<AlbumCard {album} />
		{/each}
	</ul>
</div>

<style>
	@media (min-width: 760px) {
		.container {
			margin-left: 50px;
			margin-right: 50px;
		}
	}
	.album-grid {
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr;
	}

	@media (min-width: 500px) and (max-width: 759px) {
		.album-grid {
			grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		}
	}

	@media (min-width: 760px) {
		.album-grid {
			grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
		}
	}
</style>
