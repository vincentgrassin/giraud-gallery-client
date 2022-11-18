<script lang="ts">
	import { dataAlbums } from "../../dataPicture";
	import { page } from "$app/stores";
	const album = dataAlbums[`${$page.params.id}`];
	import PictureList from "$lib/PictureList.svelte";
	import Icon from "$lib/Icon.svelte";
	export let isListDisplay: boolean = true;

	const handleListDisplay = (isList: boolean) => {
		isListDisplay = isList;
	};
</script>

<div class="album">
	<div class="album-header">
		<div class="album-informations">
			<h2>{album.name}</h2>
			<p>{album.date}</p>
		</div>
		<div>
			<button on:click={() => handleListDisplay(true)} disabled={isListDisplay}>
				<Icon name="picture" height="30px" width="30px" />
			</button>
			<button on:click={() => handleListDisplay(false)} disabled={!isListDisplay}>
				<Icon name="grid" height="30px" width="30px" />
			</button>
		</div>
	</div>
	{#if album.pictures}
		<PictureList pictures={album.pictures} {isListDisplay} />
	{/if}
</div>

<style>
	.album {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.album-header {
		display: flex;
		width: 80%;
		justify-content: space-around;
	}
</style>
