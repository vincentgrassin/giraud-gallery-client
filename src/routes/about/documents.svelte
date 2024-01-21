<script lang="ts">
	import Divider from "$lib/Divider.svelte";
	import PageLayout from "$lib/PageLayout.svelte";
	import TextBloc from "$lib/TextBloc.svelte";
	import Title from "$lib/Title.svelte";
	import { resources } from "../../resources";
</script>

<PageLayout>
	<Title title={resources.documents} />
	<div class="document">
		<Title variant="h2" title={resources.documentBirth} />
		<img
			class="francis-img"
			src={"../images/certificat_naissance.jpg"}
			alt={"certificat naissance Francis Giraud"}
			loading="lazy"
		/>
		<TextBloc bold margin="none" content={resources.documentBirthDescription} />
		<TextBloc margin="small" content={resources.documentBirthDescription2} />
	</div>
	<Divider />
	<div class="document">
		<Title variant="h2" title={resources.documentWedding} />
		<img
			class="francis-img"
			src={"../images/certificat_mariage.png"}
			alt={"certificat mariage 1 Francis Giraud"}
			loading="lazy"
		/>
		<img
			class="francis-img"
			src={"../images/certificat_mariage2.png"}
			alt={"certificat mariage 2 Francis Giraud"}
			loading="lazy"
		/>
		<TextBloc margin="small" content={resources.documentWeddingDescription} />
	</div>
	<Divider />
	<div class="document">
		<Title variant="h2" title={resources.documentDeath} />
		<img
			class="francis-img"
			src={"../images/certificat_deces.png"}
			alt={"certificat deces Francis Giraud"}
			loading="lazy"
		/>
		<TextBloc bold margin="none" content={resources.documentDeathDescription} />
		<TextBloc margin="small" content={resources.documentDeathDescription2} />
	</div>
</PageLayout>

<style>
	.document {
		margin: 16px 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	img {
		width: 90%;
	}

	@media (min-width: 1260px) {
		.document {
			margin: 32px 0;
		}
	}

	@media (min-width: 1260px) {
		img {
			width: 80%;
		}
	}
</style>
