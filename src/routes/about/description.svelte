<script lang="ts">
	import Divider from "$lib/Divider.svelte";
	import TextBloc from "$lib/TextBloc.svelte";
	import Title from "$lib/Title.svelte";
	import { resources } from "../../resources";
</script>

<div class="about">
	<div class="container">
		<Title title={resources.francisGiraud} />
		<div class="main-description">
			<div class="image-wrapper">
				<img
					class="francis-img"
					src={"../images/FRANCIS LEON GIRAUD PHOTO.jpg"}
					alt={resources.francisGiraud}
					loading="lazy"
				/>
			</div>
			<div class="description-text">
				<Title variant="h2" title={resources.francisDescriptionTitle} />
				<TextBloc bold smallMargin content={resources.francisDescriptionLegend} />
				<TextBloc smallMargin content={resources.francisDescriptionContent} />
			</div>
		</div>
		<Divider />
		<div class="document">
			<Title variant="h2" title={resources.familyTree} />
			<img
				class="family-tree"
				src={"../images/ARBRE GENEALOGIQUE GIRAUD-1.png"}
				alt={"arbre généalogique Francis Giraud"}
				loading="lazy"
			/>
		</div>
		<Divider />
		<div class="document">
			<Title variant="h2" title={resources.documetnPatronymique} />
			<img
				class="family-tree"
				src={"../images/FICHE PATRONYMIQUE GIRAUD-1.png"}
				alt={"Fiche patronymique Francis Giraud 1"}
				loading="lazy"
			/>

			<img
				class="family-tree"
				src={"../images/FICHE PATRONYMIQUE GIRAUD-2.png"}
				alt={"Fiche patronymique Francis Giraud 2"}
				loading="lazy"
			/>
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

	.francis-img {
		width: 100%;
	}

	.main-description {
		display: flex;
		flex-direction: column;
	}

	.container {
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.description-text {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.image-wrapper {
		margin: 16px;
	}

	.document {
		margin: 32px 0 64px 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.family-tree {
		width: 100%;
	}

	@media (min-width: 1260px) {
		.container {
			width: 60%;
		}

		.main-description {
			flex-direction: row;
		}

		.description-text {
			flex: 1;
		}

		.image-wrapper {
			flex: 1;
		}
		.family-tree {
			width: 80%;
		}
	}
</style>
