<script lang="ts">
	import type { Picture } from "../types";
	import { crossfade } from "svelte/transition";

	import { buildImageLocatorUrl } from "../helpers";
	export let picture: Picture;
	export let handlePictureChange: (p: Picture | undefined) => void;
	export let isListDisplay: boolean;

	const [send, receive] = crossfade({
		duration: () => 350
	});
</script>

{#if isListDisplay}
	<img
		src={buildImageLocatorUrl(picture)}
		alt={picture.cloudinaryPublicId}
		class="list-picture"
		out:send={{ key: picture.id }}
		in:receive={{ key: picture.id }}
		on:click={() => handlePictureChange(picture)}
		loading="lazy"
	/>
{:else}
	<div
		role="img"
		aria-label={picture.id}
		out:send={{ key: picture.id }}
		in:receive={{ key: picture.id }}
		on:click={() => handlePictureChange(picture)}
		class="grid-picture"
		style="background-image: url({buildImageLocatorUrl(picture)});"
	/>
{/if}

<style>
	.grid-picture {
		height: 100%;
		background: center / cover no-repeat;
	}

	.list-picture {
		height: 100%;
		margin-top: 16px;
		width: 100%;
	}
</style>
