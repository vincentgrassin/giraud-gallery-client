<script lang="ts">
	import type { Picture } from "../types";
	import { buildImageLocatorUrl } from "../helpers";
	import PictureDetails from "./PictureDetails.svelte";
	export let picture: Picture;
	export let isPictureDetailsDisplayed: boolean = false;

	export const handlePictureDetailsVisibility = (isVisible: boolean) => {
		isPictureDetailsDisplayed = isVisible;
	};
</script>

<li class="card">
	<a href={buildImageLocatorUrl(picture)}>
		<img
			src={buildImageLocatorUrl(picture)}
			alt={picture.name}
			class="picture"
			on:mouseover={() => handlePictureDetailsVisibility(true)}
			on:focus={() => handlePictureDetailsVisibility(true)}
		/>
	</a>
	{#if isPictureDetailsDisplayed}
		<PictureDetails {picture} onMouseLeave={handlePictureDetailsVisibility} />
	{/if}
</li>

<style>
	.card {
		position: relative;
	}
	.picture {
		width: 100%;
	}
</style>
