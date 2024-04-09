<script lang="ts">
	import Divider from "$lib/Divider.svelte";
	import PageLayout from "$lib/PageLayout.svelte";
	import TextBloc from "$lib/TextBloc.svelte";
	import Title from "$lib/Title.svelte";
	import { resources } from "../../resources";
</script>

<PageLayout>
	<Title variant="h1" title={resources.documents} />
	<div class="document">
		<Title variant="h2" title={resources.documentBirth} />
		<div class="text-with-image">
			<div class="image-wrapper">
				<img
					class="francis-img"
					src={"../images/certificat_naissance.webp"}
					alt={"certificat naissance Francis Giraud"}
					loading="lazy"
				/>
			</div>
			<div class="description-text">
				<TextBloc bold margin="none" content={resources.documentBirthDescription} />
				<TextBloc margin="small" content={resources.documentBirthDescription2} />
			</div>
		</div>
	</div>
	<Divider />
	<div class="document">
		<Title variant="h2" title={resources.documentWedding} />
		<div class="text-with-image">
			<div class="image-wrapper">
				<img
					class="francis-img"
					src={"../images/certificat_mariage.webp"}
					alt={"certificat mariage 1 Francis Giraud"}
					loading="lazy"
				/>
				<img
					class="francis-img"
					src={"../images/certificat_mariage2.webp"}
					alt={"certificat mariage 2 Francis Giraud"}
					loading="lazy"
				/>
			</div>
			<div class="description-text">
				<TextBloc margin="small" content={resources.documentWeddingDescription} />
			</div>
		</div>
	</div>
	<Divider />
	<div class="document">
		<Title variant="h2" title={resources.documentDeath} />
		<img
			class="francis-img"
			src={"../images/certificat_deces.webp"}
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

	.text-with-image {
		display: flex;
		flex-direction: column;
		margin-top: 16px;
	}

	@media (min-width: 1260px) {
		.text-with-image {
			flex-direction: row;
		}
		.document {
			margin: 32px 0;
		}

		.image-wrapper {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.description-text {
			flex: 1;
		}
	}
</style>
