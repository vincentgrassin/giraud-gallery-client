<script lang="ts">
	import type { Album } from "../types";
	import { buildImageLocatorUrl } from "../helpers";
	export let album: Album;
</script>

<li class="card">
	<a href={`/album/${album.publicId}`} class="card-link">
		<img src={buildImageLocatorUrl(album.coverPicture)} alt={album.name} class="cover-picture" />
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
	}
	.card:hover {
		box-shadow: 0 0 11px var(--lightGrey);
	}
	.card-link {
		display: flex;
		flex-direction: column;
		text-decoration: none;
		height: 100%;
	}
	.cover-picture {
		width: 100%;
		height: 300px;
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
