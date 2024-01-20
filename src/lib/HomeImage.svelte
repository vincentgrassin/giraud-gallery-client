<script lang="ts">
	import type { Picture } from "../types";
	import { buildImageLocatorUrl } from "../helpers";
	export let picture: Picture;
</script>

<img src={buildImageLocatorUrl(picture)} alt={picture.cloudinaryPublicId} loading="lazy" />

<style>
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
