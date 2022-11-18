<script lang="ts">
	import type { Picture } from "../types";
	import { buildImageLocatorUrl } from "../helpers";
	export let picture: Picture;
</script>

<li class="card">
	<a href={buildImageLocatorUrl(picture)}>
		<img src={buildImageLocatorUrl(picture)} alt={picture.cloudinaryPublicId} class="picture" />
	</a>
</li>

<style>
	.card {
		position: relative;
	}
	.picture {
		width: 100%;
	}
</style>
