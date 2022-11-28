<script lang="ts">
	import type { Picture } from "../types";
	import keyboard, { buildImageLocatorUrl } from "../helpers";
	import { tick } from "svelte";
	import { crossfade, fade } from "svelte/transition";

	export let selected: Picture | undefined;
	export let pictures: Picture[];
	let gallery: HTMLElement;

	$: currentIdx = selected ? pictures.findIndex((d) => d === selected) : -1;

	const [send, receive] = crossfade({
		duration: () => 350
	});

	const shortcut = {
		ArrowRight: async (e: KeyboardEvent) => {
			e.preventDefault();
			const nextIdx = (currentIdx + 1) % pictures.length;
			selected = pictures[nextIdx];
			await tick();
			const active = gallery.querySelector('[data-selected="true"]');
			if (active) {
				active.scrollIntoView();
			}
		},
		ArrowLeft: async (e: KeyboardEvent) => {
			e.preventDefault();
			const nextIdx = currentIdx === 0 ? pictures.length - 1 : (currentIdx - 1) % pictures.length;
			selected = pictures[nextIdx];
			await tick();
			const active = gallery.querySelector('[data-selected="true"]');
			if (active) {
				active.scrollIntoView();
			}
		}
	};
</script>

<div
	class="image-viewer"
	on:click={(e) => {
		if (e.target === e.currentTarget) {
			selected = undefined;
		}
	}}
>
	<button
		on:click={() => {
			const nextIdx = (currentIdx - 1) % pictures.length;
			selected = pictures[nextIdx];
		}}
	>
		Previous
	</button>
	<button
		on:click={() => {
			const nextIdx = (currentIdx + 1) % pictures.length;
			selected = pictures[nextIdx];
		}}
	>
		Next
	</button>
	<img
		in:receive={{ key: selected }}
		out:send={{ key: selected }}
		src={buildImageLocatorUrl(selected)}
		alt=""
	/>
	<div
		aria-label="album"
		role="group"
		bind:this={gallery}
		use:keyboard={{ shortcut }}
		class="gallery"
		tabindex={0}
	>
		{#each pictures as d}
			<div
				role="img"
				aria-label={d.id}
				data-selected={selected === d}
				class:active={selected === d}
				on:click={() => (selected = d)}
				class="image"
				style="background-image:url({buildImageLocatorUrl(d)})"
			/>
		{/each}
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
	}

	.image {
		width: 100%;
		height: 300px;
		background: center / cover no-repeat;
	}

	.gallery {
		display: inline-flex;
		flex-wrap: nowrap;
		width: 100%;
		overflow-x: auto;
	}

	.gallery > .image {
		flex-shrink: 0;
		margin-right: 8px;
		width: 100px;
		height: 100px;
	}

	.image-viewer {
		padding: 20px;
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: 0;
		right: 0;
		top: 0;
		background-color: rgba(100, 100, 100, 0.8);
	}

	.active {
		border: 3px solid #000;
	}

	.image-viewer > img {
		max-height: 70%;
	}
</style>
