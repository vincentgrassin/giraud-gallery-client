<script lang="ts">
	import { dataAlbums } from "../../dataPicture";
	import { page } from "$app/stores";
	import PicturesGallery from "$lib/PicturesGallery.svelte";
	import { resources } from "../../resources";
	import Title from "$lib/Title.svelte";
	import TextBloc from "$lib/TextBloc.svelte";

	const album = dataAlbums[`${$page.params.id}`];
</script>

<div class="album">
	<div class="album-header">
		<Title variant="h1" title={album.name} />
		<div class="album-informations">
			<p class="text">{album.date ?? resources.unknownDate}</p>
			<p class="text">{`${album.pictures?.length} ${resources.drawings.toLowerCase()}`}</p>
			<p class="text">{`${resources.numberTag} ${album.number}`}</p>
		</div>
		<div class="album-tags">
			{#if album.description}
				<p class="description-tags">{`${resources.inThisAlbum} ${album.description}`}</p>
			{/if}
		</div>
	</div>
	{#if album.pictures}
		<PicturesGallery pictures={album.pictures} isDiary={album.isDiary} />
	{/if}
</div>

<style>
	.album {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.text {
		font-size: var(--fs2m);
		margin: 0;
	}

	.description-tags {
		font-size: var(--fs2m);
		margin: 0;
		padding-top: 16px;
	}
	.album-header {
		display: flex;
		flex-direction: column;
		width: 80%;
		margin: 0 10%;
	}

	.album-informations {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.album-tags {
		display: flex;
		flex-wrap: wrap;
	}

	@media (min-width: 760px) {
		.text {
			font-size: var(--fs3m);
		}
	}

	@media (min-width: 1200px) {
		.album-header {
			max-width: 60%;
		}
	}
</style>
