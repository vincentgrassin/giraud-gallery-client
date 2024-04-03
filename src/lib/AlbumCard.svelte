<script lang="ts">
	import type { Album } from "../types";
	import { buildImageStaticPath } from "../helpers";
	import { resources } from "../resources";
	import Title from "./Title.svelte";
	export let album: Album;
	export let index: number;

	const coverPicture = album.pictures?.find((picture) => {
		return picture.id === album.coverPicture;
	});
</script>

<li class="card">
	<a href={`/album/${album.id}`} class="card-link">
		<img
			src={coverPicture ? buildImageStaticPath(coverPicture) : ""}
			alt={album.name}
			class="cover-picture"
		/>
		<div class="album-informations">
			<Title title={album.name} variant="h2" />
			<div class="album-description">
				<p>{album.date ?? resources.unknownDate}</p>
				<p>{album.pictures?.length} {resources.drawings.toLowerCase()}</p>
				<p>{`${resources.numberTag} ${index + 1}`}</p>
			</div>
		</div>
	</a>
</li>

<style>
	.card {
		gap: 16px;
		transition: box-shadow 0.3s;
		background-color: white;
		box-shadow: 0 0 8px var(--lightGrey);
	}
	.card:hover {
		box-shadow: 0 0 16px var(--darkGrey);
	}
	.card-link {
		display: flex;
		flex-direction: column;
		text-decoration: none;
		height: 100%;
		color: var(--eerieBlack);
	}
	.card-link:hover {
		color: var(--darkGrey);
	}
	.cover-picture {
		width: 100%;
		height: 400px;
		object-fit: cover;
		object-position: center;
	}
	.album-informations {
		margin: 8px 16px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: 1;
	}

	.album-description {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
	}
</style>
