<script context="module" lang="ts">
	export async function load({ fetch }) {
		const res = await fetch(`http://localhost:4000/album/all`);
		const albums = await res.json();
		console.log(albums[0]);
		if (res.ok) {
			return {
				props: {
					albums
				}
			};
		}
		return {
			status: res.status,
			error: new Error("could not find")
		};
	}
</script>

<script lang="ts">
	import type { Album } from "../types";
	import { resources } from "../resources";
	import { buildImageLocatorUrl } from "../helpers";
	export let albums: Album[];
</script>

<div>
	<h1>{resources.home}</h1>
	<ul>
		{#each albums as album}
			<li>
				<img src={buildImageLocatorUrl(album.coverPicture)} alt={album.name} />
				<a href={`/album/${album.publicId}`}>{album.name}</a>
			</li>
		{/each}
	</ul>
</div>

<style></style>
