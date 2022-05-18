<script lang="ts">
	import type { Picture } from "../types";
	export let pictures: Picture[];
	import PictureCard from "$lib/PictureCard.svelte";
	export let isListDisplay: boolean = true;
</script>

<ul class={isListDisplay ? "pictures-list" : "picture-grid"}>
	{#each pictures as picture}
		<PictureCard {picture} />
	{/each}
</ul>

<style>
	.pictures-list {
		width: 60%;
	}
	@media (max-width: 800px) {
		.pictures-list {
			width: 100%;
		}
	}
	@media (min-width: 1600px) {
		.pictures-list {
			width: 50%;
		}
	}
	.picture-grid {
		width: 80%;
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		margin-left: 0;
	}
</style>
