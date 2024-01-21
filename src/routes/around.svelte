<script lang="ts">
	import PageLayout from "$lib/PageLayout.svelte";
	import TextBloc from "$lib/TextBloc.svelte";
	import Title from "$lib/Title.svelte";
	import { resources } from "../resources";
</script>

<PageLayout>
	<Title title={resources.around} />
	<div class="description">
		<Title variant="h2" title={resources.albumsGathering} />
		<TextBloc margin="small" content={resources.albumsGatheringDetails} />
		<TextBloc margin="small" content={resources.albumsGatheringDetails2} />
		<TextBloc margin="small" content={resources.albumsGatheringDetails3} />
		<TextBloc margin="small" content={resources.albumsGatheringDetails4} />
		<TextBloc content={resources.albumsGatheringDetails5} />
	</div>
</PageLayout>

<style>
	.description {
		margin: 16px 0 32px 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
