<script context="module" lang="ts">
	import { apiBaseUrl } from "../helpers";
	import type { Load } from "@sveltejs/kit";

	export const load: Load = async ({ fetch }) => {
		const res = await fetch(`${apiBaseUrl}/album/all`);
		const albums = await res.json();
		if (res.ok) {
			return {
				props: {
					albums
				}
			};
		}
		return {
			status: res.status,
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
			<AlbumCard {album} />
		{/each}
	</ul>
</div>

<style>
	.album-grid {
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		margin-left: 0;
	}
</style>
