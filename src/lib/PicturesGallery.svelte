<script lang="ts">
	import type { Picture } from "../types";
	export let isListDisplay: boolean = true;
	export let pictures: Picture[];
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
					{#if isListDisplay}
						<img
							src={buildImageLocatorUrl(picture)}
							alt={picture.cloudinaryPublicId}
							class="list-picture"
							out:send={{ key: picture.id }}
							in:receive={{ key: picture.id }}
							on:click={() => handlePictureChange(picture)}
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
		width: 80%;
	}
	@media (min-width: 900px) {
		.gallery-list {
			width: 70%;
		}
	}

	.grid-picture {
		width: 100%;
		height: 300px;
		background: center / cover no-repeat;
	}

	.list-picture {
		width: 80%;
		margin-top: 8px;
	}
</style>
