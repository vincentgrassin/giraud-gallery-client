<script lang="ts">
	import type { Picture } from "../types";
	import keyboard, { buildImageStaticPath, buildThumbnailPath } from "../helpers";
	import { tick } from "svelte";
	import { crossfade } from "svelte/transition";
	import Button from "./Button.svelte";
	import Icon from "./Icon.svelte";

	export let handlePictureChange: (picture: Picture | undefined) => void;
	export let selected: Picture | undefined;
	export let pictures: Picture[];
	let gallery: HTMLElement;

	import { onMount } from "svelte";

	onMount(async () => {
		gallery.focus();
	});
	$: currentIdx = selected ? pictures.findIndex((d) => d === selected) : -1;

	const [send, receive] = crossfade({
		duration: () => 350
	});

	const handleChange = async (picture: Picture) => {
		handlePictureChange(picture);
		try {
			await tick();
			const active = gallery.querySelector('[data-selected="true"]');
			if (active) {
				active.scrollIntoView();
			}
		} catch (e) {
			console.log(e);
		}
		gallery.focus();
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
	<div class="gallery-container">
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
					style="background-image:url({buildThumbnailPath(picture, 1)})"
				/>
			{/each}
		</div>
		<div class="gallery-button-container">
			<Button on:click={() => handlePictureChange(undefined)} iconButton>
				<Icon name="close" height="30px" width="30px" />
			</Button>
		</div>
	</div>

	<div class="image-container">
		<div class="button-container">
			<Button
				on:click={async () => {
					const nextIdx = (currentIdx - 1) % pictures.length;
					handleChange(pictures[nextIdx]);
				}}
				iconButton
			>
				<Icon name="chevronLeft" height="30px" width="30px" />
			</Button>
		</div>
		<div>
			<img class="link-image" src={buildImageStaticPath(selected, 1)} alt={selected?.id} />
			<p class="picture-informations">{selected?.id}</p>
		</div>
		<div class="button-container">
			<Button
				on:click={async () => {
					const nextIdx = (currentIdx + 1) % pictures.length;
					handleChange(pictures[nextIdx]);
				}}
				iconButton
			>
				<Icon name="chevronRight" height="30px" width="30px" />
			</Button>
		</div>
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
		cursor: pointer;
	}

	.link-image {
		width: 100%;
	}

	.gallery {
		display: inline-flex;
		flex-wrap: nowrap;
		width: 100%;
		overflow-x: auto;
		margin: 16px 8px;
	}

	.gallery > .image {
		flex-shrink: 0;
		margin-right: 8px;
		width: 100px;
		height: 100px;
	}

	.image-viewer {
		padding: 0px 24px;
		position: fixed;
		overflow-y: auto;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.95);
		z-index: 9999;
	}

	.active {
		border: 3px solid var(--golden);
	}
	.button-container {
		margin-bottom: auto;
		margin-top: 300px;
	}
	.gallery-container {
		display: flex;
		justify-content: space-between;
		height: 150px;
	}
	.gallery-button-container {
		display: flex;
		align-items: center;
	}

	.picture-informations {
		color: white;
	}
</style>
