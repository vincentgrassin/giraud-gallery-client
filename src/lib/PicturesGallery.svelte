<script lang="ts">
	import ImageLoader from "$lib/ImageLoader.svelte";
	import Image from "./Image.svelte";
	import type { Picture } from "../types";
	import Icon from "./Icon.svelte";
	import PictureCard from "./PictureCard.svelte";
	export let isListDisplay: boolean = true;
	export let pictures: Picture[];
	let selected: Picture | undefined;
	import { onMount } from "svelte";

	let innerWidth: number = 0;

	onMount(() => {
		function onResize() {
			innerWidth = window.innerWidth;
		}
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	});

	const handleListDisplay = (isList: boolean) => {
		isListDisplay = isList;
	};

	const handlePictureChange = (picture: Picture | undefined) => {
		selected = picture;
	};

	const calculateHeight = ({
		innerWidth,
		height,
		width
	}: {
		innerWidth: number;
		height: number;
		width: number;
	}) => {
		const ratio = height / width;

		return innerWidth * 0.8 * ratio ?? width;
	};
</script>

<svelte:window bind:innerWidth />
<div class="container">
	<div>
		<button on:click={() => handleListDisplay(true)} disabled={isListDisplay}>
			<Icon name="picture" height="30px" width="30px" />
		</button>
		<button on:click={() => handleListDisplay(false)} disabled={!isListDisplay}>
			<Icon name="grid" height="30px" width="30px" />
		</button>
	</div>
	{#if pictures}
		<ul class:gallery-grid={!isListDisplay} class:gallery-list={isListDisplay}>
			{#each pictures as picture}
				{#if picture !== selected}
					<li
						style={`height:${
							isListDisplay
								? calculateHeight({ innerWidth, height: picture.height, width: picture.width })
								: 300
						}px`}
					>
						<ImageLoader>
							<Image {handlePictureChange} {picture} {isListDisplay} />
						</ImageLoader>
					</li>
				{/if}
			{/each}
		</ul>
		{#if selected}
			<PictureCard {selected} {pictures} {handlePictureChange} />
		{/if}
	{/if}
</div>

<style>
	* {
		box-sizing: border-box;
	}

	.container {
		width: 80%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-gap: 10px;
		width: 100%;
	}

	.gallery-list {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	li {
		list-style: none;
		width: 100%;
	}
</style>
