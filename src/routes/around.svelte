<script lang="ts">
	import TextBloc from "$lib/TextBloc.svelte";
	import Title from "$lib/Title.svelte";
	import { resources } from "../resources";
</script>

<div class="about">
	<div class="container">
		<Title title={resources.around} />
		<div class="description">
			<Title variant="h2" title={resources.albumsGathering} />
			<TextBloc margin="small" content={resources.albumsGatheringDetails} />
			<TextBloc margin="small" content={resources.albumsGatheringDetails2} />
			<TextBloc margin="small" content={resources.albumsGatheringDetails3} />
			<TextBloc margin="small" content={resources.albumsGatheringDetails4} />
			<TextBloc content={resources.albumsGatheringDetails5} />
		</div>
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
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.description {
		margin: 16px 0 32px 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	@media (min-width: 1260px) {
		.container {
			width: 60%;
		}
	}
</style>
