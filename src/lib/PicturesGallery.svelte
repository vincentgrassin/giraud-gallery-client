<script lang="ts">
	import type { Album, Picture } from "../types";
	export let isListDisplay: boolean = true;
	export let album: Album;
	import { crossfade, fade } from "svelte/transition";

	import Icon from "./Icon.svelte";
	import { buildImageLocatorUrl } from "../helpers";
	import PictureCard from "./PictureCard.svelte";
	let selected: Picture | undefined;
	const [send, receive] = crossfade({
		duration: () => 350
	});

	const handleListDisplay = (isList: boolean) => {
		isListDisplay = isList;
	};

	const handlePictureChange = (picture: Picture | undefined) => {
		selected = picture;
	};
</script>

<div>
	<button on:click={() => handleListDisplay(true)} disabled={isListDisplay}>
		<Icon name="picture" height="30px" width="30px" />
	</button>
	<button on:click={() => handleListDisplay(false)} disabled={!isListDisplay}>
		<Icon name="grid" height="30px" width="30px" />
	</button>
	{#if album.pictures}
		<ul class="gallery-container">
			{#each album.pictures as picture}
				<div>
					{#if picture !== selected}
						<div
							role="img"
							aria-label={picture.id}
							out:send={{ key: picture.id }}
							in:receive={{ key: picture.id }}
							on:click={() => handlePictureChange(picture)}
							class="image"
							style="background-image: url({buildImageLocatorUrl(picture)});"
						/>
					{/if}
				</div>
			{/each}
		</ul>

		{#if selected}
			<PictureCard {selected} pictures={album.pictures} {handlePictureChange} />
		{/if}
	{/if}
</div>

<style>
	/* .pictures-list {
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
	} */

	* {
		box-sizing: border-box;
	}

	.gallery-container {
		display: grid;
		grid-template-columns: repeat(3, 400px);
		grid-gap: 10px;
	}

	.image {
		width: 100%;
		height: 300px;
		background: center / cover no-repeat;
	}
</style>
