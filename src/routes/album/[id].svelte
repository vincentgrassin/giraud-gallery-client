<script context="module" lang="ts">
	import { apiBaseUrl } from "../../helpers";
	import type { Load } from "@sveltejs/kit";

	export const load: Load = async ({ params, fetch }) => {
		const id = params.id;
		const res = await fetch(`${apiBaseUrl}/album/${id}`);
		const album = await res.json();
		if (res.ok) {
			return {
				props: {
					album
				}
			};
		}
		return {
			status: 301,
			redirect: "/"
		};
	};
</script>

<script lang="ts">
	import type { Album } from "src/types";
	export let album: Album;
	import PictureCard from "$lib/PictureCard.svelte";
</script>

<div class="album">
	<div class="album-informations">
		<h2>{album.name}</h2>
		<p>{album.date}</p>
	</div>
	<ul class="pictures-list">
		{#if album.pictures}
			{#each album.pictures as picture}
				<PictureCard {picture} />
			{/each}
		{/if}
	</ul>
</div>

<style>
	.album {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.pictures-list {
		width: 60%;
	}
	@media (max-width: 800px) {
		.pictures-list {
			width: 100%;
		}
	}
</style>
