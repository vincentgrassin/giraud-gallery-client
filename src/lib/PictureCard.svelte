<script lang="ts">
	import type { Picture } from "../types";
	import keyboard, { buildImageLocatorUrl } from "../helpers";
	import { tick } from "svelte";
	import { crossfade, fade } from "svelte/transition";

	export let handlePictureChange: (picture: Picture | undefined) => void;
	export let selected: Picture | undefined;
	export let pictures: Picture[];
	let gallery: HTMLElement;

	$: currentIdx = selected ? pictures.findIndex((d) => d === selected) : -1;

	const [send, receive] = crossfade({
		duration: () => 350
	});

	const handleChange = async (picture: Picture) => {
		handlePictureChange(picture);
		await tick();
		const active = gallery.querySelector('[data-selected="true"]');
		if (active) {
			active.scrollIntoView();
		}
	};

	const handleArrowChange = async (e: KeyboardEvent, direction: "left" | "right") => {
		e.preventDefault();
		const nextIdx =
			direction === "right"
				? (currentIdx + 1) % pictures.length
				: currentIdx === 0
				? pictures.length - 1
				: (currentIdx - 1) % pictures.length;
		handleChange(pictures[nextIdx]);
	};

	const shortcut = {
		ArrowRight: async (e: KeyboardEvent) => handleArrowChange(e, "right"),
		ArrowLeft: async (e: KeyboardEvent) => handleArrowChange(e, "left")
	};
</script>

<div
	class="image-viewer"
	on:keyup={(e) => {
		if (e.code === "Escape") {
			handlePictureChange(undefined);
		}
	}}
	on:click={(e) => {
		if (e.target === e.currentTarget) {
			handlePictureChange(undefined);
		}
	}}
>
	<div
		aria-label="gallery"
		role="group"
		bind:this={gallery}
		use:keyboard={{ shortcut }}
		class="gallery"
		tabindex={0}
	>
		{#each pictures as picture}
			<div
				role="img"
				aria-label={picture.id}
				data-selected={selected === picture}
				class:active={selected === picture}
				on:click={() => handlePictureChange(picture)}
				class="image"
				style="background-image:url({buildImageLocatorUrl(picture)})"
			/>
		{/each}
	</div>

	<div class="image-container">
		<button
			on:click={async () => {
				const nextIdx = (currentIdx - 1) % pictures.length;
				handleChange(pictures[nextIdx]);
			}}
		>
			Previous
		</button>
		<a
			in:receive={{ key: selected }}
			out:send={{ key: selected }}
			href={buildImageLocatorUrl(selected)}
			target="_blank"
		>
			<img src={buildImageLocatorUrl(selected)} alt={selected?.cloudinaryPublicId} />
		</a>
		<button
			on:click={async () => {
				const nextIdx = (currentIdx + 1) % pictures.length;
				handleChange(pictures[nextIdx]);
			}}
		>
			Next
		</button>
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
	}

	.image-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 80px;
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
		overflow-y: auto;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: 0;
		right: 0;
		top: var(--headerHeight);
		background-color: rgba(100, 100, 100, 0.8);
	}

	.active {
		border: 3px solid #000;
	}

	.image-viewer > img {
		max-height: 80%;
	}
</style>
