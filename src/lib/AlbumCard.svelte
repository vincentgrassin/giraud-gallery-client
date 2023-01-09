<script lang="ts">
	import type { Album } from "../types";
	import { buildImageLocatorUrl } from "../helpers";
	export let album: Album;

	const coverPicture = album.pictures?.find((picture) => {
		return picture.id === album.coverPicture;
	});
</script>

<li class="card">
	<a href={`/album/${album.id}`} class="card-link">
		<img
			src={coverPicture ? buildImageLocatorUrl(coverPicture) : ""}
			alt={album.name}
			class="cover-picture"
		/>
		<div class="album-informations">
			<h2>
				{album.name}
			</h2>
			<p>{album.date}</p>
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
	}
	.album-informations {
		margin: 16px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: 1;
	}
</style>
