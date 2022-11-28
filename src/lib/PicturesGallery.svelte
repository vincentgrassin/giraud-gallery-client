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

	const handlePreviewClick = (picture: Picture) => {
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
			{#each album.pictures as d}
				<div>
					{#if d !== selected}
						<div
							role="img"
							aria-label={d.id}
							out:send={{ key: d.id }}
							in:receive={{ key: d.id }}
							on:click={() => handlePreviewClick(d)}
							class="image"
							style="background-image: url({buildImageLocatorUrl(d)});"
						/>
					{/if}
				</div>
			{/each}
		</ul>

		{#if selected}
			<PictureCard {selected} pictures={album.pictures} />
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
