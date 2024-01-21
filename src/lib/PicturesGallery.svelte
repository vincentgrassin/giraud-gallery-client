<script lang="ts">
	import ImageLoader from "$lib/ImageLoader.svelte";
	import Image from "$lib/Image.svelte";
	import type { Picture } from "../types";
	import Icon from "$lib/Icon.svelte";
	import PictureCard from "$lib/PictureCard.svelte";
	import { onMount } from "svelte";
	import { breakpoints, getGallerySizeRatio } from "../helpers";
	import Button from "./Button.svelte";
	import { QUALITY_PICTURE, resources } from "../resources";
	import { colors } from "../styles/theme";

	export let isListDisplay: boolean = false;
	export let isFavouriteDisplay: boolean = false;
	export let pictures: Picture[];
	let selected: Picture | undefined;
	let currentPictures: Picture[];

	$: {
		if (isFavouriteDisplay) {
			currentPictures = pictures.filter((picture) => picture.quality === QUALITY_PICTURE.HIGH);
		} else {
			currentPictures = pictures;
		}
	}

	let innerWidth: number = 0;
	let isSmallScreen = false;

	onMount(() => {
		function onResize() {
			innerWidth = window.innerWidth;
			isSmallScreen = innerWidth < breakpoints.sm;
		}
		onResize();
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	});

	const handleListDisplay = (isList: boolean) => {
		isListDisplay = isList;
	};

	const filterFavourite = () => {
		isFavouriteDisplay = !isFavouriteDisplay;
	};

	const handlePictureChange = (picture: Picture | undefined) => {
		if (!isSmallScreen) {
			selected = picture;
		}
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

		return innerWidth * getGallerySizeRatio(innerWidth) * ratio ?? width;
	};
</script>

<svelte:window bind:innerWidth />
<div class="container">
	<div class="buttons-container">
		<Button on:click={filterFavourite} --color={colors.golden}>
			<span>
				{isFavouriteDisplay ? resources.displayAll : resources.displayFavourites}
			</span>
		</Button>

		<div class="gallery-display-switch">
			<Button
				on:click={() => handleListDisplay(false)}
				disabled={!isListDisplay}
				variant="icon"
				tooltip={resources.gridDisplay}
			>
				<Icon name="grid" height="30px" width="30px" />
			</Button>
			<Button
				on:click={() => handleListDisplay(true)}
				disabled={isListDisplay}
				variant="icon"
				tooltip={resources.listDisplay}
			>
				<Icon name="picture" height="30px" width="30px" />
			</Button>
		</div>
	</div>
	{#if currentPictures}
		<ul class:gallery-grid={!isListDisplay} class:gallery-list={isListDisplay}>
			{#each currentPictures as picture}
				{#if picture !== selected}
					<li
						style={`height:${
							isListDisplay
								? calculateHeight({ innerWidth, height: picture.height, width: picture.width })
								: 300
						}px`}
						class:picture-listItem={isListDisplay}
					>
						<ImageLoader>
							<Image {handlePictureChange} {picture} {isListDisplay} />
						</ImageLoader>
					</li>
				{/if}
			{/each}
		</ul>
		{#if selected && !isSmallScreen}
			<PictureCard {selected} pictures={currentPictures} {handlePictureChange} />
		{/if}
	{/if}
</div>

<style>
	* {
		box-sizing: border-box;
	}

	.container {
		width: 90%;
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
		width: 100%;
	}

	.buttons-container {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		padding: 32px;
	}

	li {
		list-style: none;
		width: 100%;
	}
	.picture-listItem {
		margin-top: 16px;
	}

	.gallery-display-switch {
		margin: 24px 0px;
		display: flex;
		width: 15%;
		justify-content: space-around;
	}

	@media (max-width: 760px) {
		.gallery-display-switch {
			display: none;
		}
	}

	@media (min-width: 760px) and (max-width: 1199px) {
		.gallery-list {
			width: 80%;
		}
	}

	@media (min-width: 1200px) {
		.gallery-list {
			width: 50%;
		}

		.buttons-container {
			padding-left: 20%;
			padding-right: 20%;
		}
	}
</style>
