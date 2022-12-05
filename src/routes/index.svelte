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
	export let albums: Album[];
</script>

<div>
	<h1>{resources.home}</h1>
	<ul class="album-grid">
		{#each albums as album}
			<AlbumCard {album} />
		{/each}
	</ul>
</div>

<style>
	.album-grid {
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
		margin-left: 0;
	}
</style>
