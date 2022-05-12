<script context="module" lang="ts">
	export async function load({ params, fetch }) {
		const id = params.id;
		const res = await fetch(`http://localhost:4000/album/${id}`);
		const album = await res.json();
		if (res.ok) {
			return {
				props: {
					album
				}
			};
		}
		return {
			status: 301,
			redirect: "/"
		};
	}
</script>

<script lang="ts">
	import type { Album } from "src/types";
	export let album: Album;
</script>

<div>
	<p>{JSON.stringify(album)}</p>
</div>
