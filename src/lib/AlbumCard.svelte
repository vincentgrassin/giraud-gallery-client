<script lang="ts">
	import type { Album } from "../types";
	import { buildImageLocatorUrl } from "../helpers";
	export let album: Album;
</script>

<li class="card">
	<img src={buildImageLocatorUrl(album.coverPicture)} alt={album.name} class="cover-picture" />
	<a href={`/album/${album.publicId}`}>{album.name}</a>
</li>

<style>
	.card {
		display: "flex";
		flex-direction: column;
		/* grid-column: span 1;
		grid-row: span 1; */
	}
	.cover-picture {
		width: 100%;
	}
</style>
