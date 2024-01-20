<script lang="ts">
	import { dataAlbums } from "../../dataPicture";
	import { page } from "$app/stores";
	import PicturesGallery from "$lib/PicturesGallery.svelte";
	import { resources } from "../../resources";
	import Title from "$lib/Title.svelte";
	import Badge from "$lib/Badge.svelte";
	import { colors } from "../../styles/theme";

	const album = dataAlbums[`${$page.params.id}`];
</script>

<div class="album">
	<div class="album-header">
		<Title title={album.name} />
		<div class="album-informations">
			<div>
				<Title variant="h2" title={album.date ?? resources.unknownDate} />
				<p>{`${album.pictures?.length} ${resources.drawings.toLowerCase()}`}</p>
			</div>
			<Badge
				--color={album.isDiary ? colors.metallicBlue : colors.redwood}
				content={album.isDiary ? resources.diary : resources.drawings}
			/>
		</div>
		<div class="album-tags">
			{#if album.description}
				{#each album.description.split(",") as tag}
					<div class="album-tag">
						<Badge --color={colors.veryDarkGrey} content={tag} />
					</div>
				{/each}
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
		margin: 20px 0px;
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
