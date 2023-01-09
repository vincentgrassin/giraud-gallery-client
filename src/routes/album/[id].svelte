<script lang="ts">
	import { dataAlbums } from "../../dataPicture";
	import { page } from "$app/stores";
	const album = dataAlbums[`${$page.params.id}`];
	import PicturesGallery from "$lib/PicturesGallery.svelte";
	import { resources } from "../../resources";
	import Title from "$lib/Title.svelte";
</script>

<div class="album">
	<div class="album-header">
		<div class="album-informations">
			<Title title={album.name} />
			<p>{album.date ?? resources.unknownDate}</p>
		</div>
	</div>
	{#if album.pictures}
		<PicturesGallery pictures={album.pictures} />
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
