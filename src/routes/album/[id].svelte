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
		<Title title={album.name} />
		<div class="album-informations">
			<Title variant="h2" title={album.date ?? resources.unknownDate} />
			<p>{`${album.pictures?.length} ${resources.drawings.toLowerCase()}`}</p>
			<p>{`${resources.numberTag} ${album.number}`}</p>
		</div>
		<div class="album-tags">
			{#if album.description}
				<TextBloc content={album.description} margin="none" />
			{/if}
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
		flex-direction: column;
		width: 80%;
		margin: 0 10%;
	}

	.album-informations {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.album-tags {
		display: flex;
		flex-wrap: wrap;
	}

	@media (min-width: 1200px) {
		.album-tags {
			margin: 0 10%;
		}
	}

	.album-tag {
		margin-right: 10px;
		margin-bottom: 10px;
	}
</style>
