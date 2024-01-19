<script lang="ts">
	import TextBloc from "$lib/TextBloc.svelte";
	import Title from "$lib/Title.svelte";
	import { resources } from "../resources";
</script>

<div class="about">
	<div class="container">
		<Title title={resources.around} />
		<TextBloc content={resources.aroundAlbums} />
		<TextBloc content={resources.aboutDescription} />
	</div>
</div>

<style>
	.about {
		display: flex;
		flex-direction: column;
		margin: 16px 0 96px 0;
		width: 100%;
		align-items: center;
	}

	.container {
		width: 80%;
	}

	@media (min-width: 760px) {
		.container {
			width: 50%;
		}
	}
</style>
