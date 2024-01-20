<script lang="ts">
	import TextBloc from "$lib/TextBloc.svelte";
	import Title from "$lib/Title.svelte";
	import { resources } from "../../resources";
</script>

<div class="about">
	<div class="container">
		<Title title={resources.documents} />
		<div class="document">
			<Title variant="h2" title={resources.documentBirth} />
			<img
				class="francis-img"
				src={"../images/certificat_naissance.jpg"}
				alt={"certificat naissance Francis Giraud"}
				loading="lazy"
			/>
			<TextBloc bold smallMargin content={resources.documentBirthDescription} />
			<TextBloc smallMargin content={resources.documentBirthDescription2} />
		</div>
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
			<TextBloc smallMargin content={resources.documentWeddingDescription} />
		</div>
		<div class="document">
			<Title variant="h2" title={resources.documentDeath} />
			<img
				class="francis-img"
				src={"../images/certificat_deces.png"}
				alt={"certificat deces Francis Giraud"}
				loading="lazy"
			/>
			<TextBloc bold smallMargin content={resources.documentDeathDescription} />
			<TextBloc smallMargin content={resources.documentDeathDescription2} />
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
		width: 80%;
	}

	.document {
		margin: 16px 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	img {
		width: 90%;
	}

	@media (min-width: 760px) {
		.container {
			width: 70%;
		}
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
