<script context="module" lang="ts">
	import { apiBaseUrl } from "../../helpers";
	import type { Load } from "@sveltejs/kit";

	export const load: Load = async ({ params, fetch }) => {
		const id = params.id;
		const res = await fetch(`${apiBaseUrl}/album/${id}`);
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
	};
</script>

<script lang="ts">
	import type { Album } from "src/types";
	export let album: Album;
</script>

<div>
	<p>{JSON.stringify(album)}</p>
</div>
