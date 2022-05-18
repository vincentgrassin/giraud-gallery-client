<script lang="ts">
	import type { Picture } from "../types";
	import { buildImageLocatorUrl } from "../helpers";
	import PictureDetails from "./PictureDetails.svelte";
	export let picture: Picture;
	export let isPictureDetailsDisplayed: boolean = false;

	export const handlePictureDetailsVisibility = (isVisible: boolean) => {
		isPictureDetailsDisplayed = !isVisible;
	};

	// const handleMouseOver = () => {
	// 	isPictureDetailsDisplayed = true;
	// };
	// const handleMouseLeave = () => {
	// 	console.log("leave");
	// 	isPictureDetailsDisplayed = false;
	// };
</script>

<li class="card">
	<a href={buildImageLocatorUrl(picture)}>
		<img
			src={buildImageLocatorUrl(picture)}
			alt={picture.name}
			class="picture"
			on:mouseover={() => handlePictureDetailsVisibility(isPictureDetailsDisplayed)}
			on:focus={() => handlePictureDetailsVisibility(isPictureDetailsDisplayed)}
		/>
	</a>
	{#if isPictureDetailsDisplayed}
		<PictureDetails {picture} />
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
