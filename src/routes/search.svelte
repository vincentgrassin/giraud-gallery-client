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
	import type { Album, Tag } from "../types";
	import AlbumCard from "$lib/AlbumCard.svelte";
	import PageLayout from "$lib/PageLayout.svelte";
	import Title from "$lib/Title.svelte";
	import { resources } from "../resources";
	import { cleanText } from "../helpers";

	export let albums: Album[];
	let selected: Tag;
	let albumsFound: Album[] = [];

	const tags: Tag[] = albums
		.reduce(
			(acc: Tag[], album: Album) => {
				const albumTags = album.description?.split(",");
				albumTags?.forEach((tag) => {
					const index = acc.findIndex((o) => o.label === tag);
					if (index !== -1) {
						acc[index].albumIds.push(album.id);
					} else {
						acc.push({ label: tag, albumIds: [album.id] });
					}
				});
				return acc;
			},
			[{ label: "", albumIds: albums.map((album) => album.id) }]
		)
		.sort((a, b) => {
			const aLabel = cleanText(a.label);
			const bLabel = cleanText(b.label);
			return aLabel > bLabel ? 1 : aLabel < bLabel ? -1 : 0;
		});

	$: {
		if (selected) {
			const searchedAlbums = selected.albumIds.map((id) => albums.find((album) => album.id === id));
			albumsFound = searchedAlbums as Album[];
		}
	}
</script>

<PageLayout>
	<Title title={resources.search} variant="h1" />
	<div class="search-page">
		<label for="tag">{resources.keyword}</label>
		<select id="tag" bind:value={selected}>
			{#each tags as tag}
				<option value={tag}>
					{tag.label}
				</option>
			{/each}
		</select>
		{#key albumsFound}
			{#if albumsFound.length > 0}
				<ul class="album-grid">
					{#each albumsFound as album}
						<AlbumCard {album} />
					{/each}
				</ul>
			{/if}
		{/key}
	</div>
</PageLayout>

<style>
	.search-page {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.album-grid {
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: repeat(auto-fit, 300px);
		height: 100%;
		width: 100%;
		margin-top: 32px;
		margin-bottom: 64px;
	}
</style>
