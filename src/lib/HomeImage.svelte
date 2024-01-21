<script lang="ts">
	import type { Picture } from "../types";
	import { buildImageStaticPath } from "../helpers";
	export let picture: Picture;
</script>

<img src={buildImageStaticPath(picture)} alt={picture.cloudinaryPublicId} loading="lazy" />

<style>
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
