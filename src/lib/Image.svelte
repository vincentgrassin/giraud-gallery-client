<script lang="ts">
	import type { Picture } from "../types";
	import { crossfade } from "svelte/transition";

	import { buildImageStaticPath } from "../helpers";
	export let picture: Picture;
	export let handlePictureChange: (p: Picture | undefined) => void;
	export let isListDisplay: boolean;

	const [send, receive] = crossfade({
		duration: () => 350
	});
</script>

<!-- FIXME: accessibility is really bad here -->
{#if isListDisplay}
	<img
		role="button"
		src={buildImageStaticPath(picture, 1)}
		alt={picture.id}
		class="list-picture"
		out:send={{ key: picture.id }}
		in:receive={{ key: picture.id }}
		on:click={() => handlePictureChange(picture)}
		loading="lazy"
	/>
{:else}
	<div
		role="button"
		aria-label={picture.id}
		out:send={{ key: picture.id }}
		in:receive={{ key: picture.id }}
		on:click={() => handlePictureChange(picture)}
		class="grid-picture"
		style="background-image: url({buildImageStaticPath(picture, 1)});"
	/>
{/if}

<style>
	.grid-picture {
		height: 100%;
		background: center / cover no-repeat;
		cursor: pointer;
	}

	.list-picture {
		height: 100%;
		margin-top: 16px;
		width: 100%;
		cursor: pointer;
	}
</style>
