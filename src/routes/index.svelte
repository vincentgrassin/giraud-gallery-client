<script lang="ts">
	import TextBloc from "$lib/TextBloc.svelte";
	import Title from "$lib/Title.svelte";
	import { resources } from "../resources";

	import { dataAlbums } from "../dataPicture";
	import type { Picture } from "src/types";
	import { shuffleArray, shuffleGridDisplayKey } from "../helpers";
	import HomeImage from "$lib/HomeImage.svelte";
	import Button from "$lib/Button.svelte";
	import { colors } from "../styles/theme";

	const allPictures = Object.values(dataAlbums).reduce((acc: Picture[], album) => {
		if (album.pictures) {
			const bestPictures = album.pictures.filter((picture) => picture.quality === 2);
			return [...acc, ...bestPictures];
		}
		return acc;
	}, []);

	const homeSelection = shuffleArray(allPictures).slice(0, 8);
	const gridKey = shuffleGridDisplayKey();
</script>

<div class="homeContainer">
	<Title title={resources.francisAlbums} />
	<div class="homeDescription">
		<TextBloc content={resources.aboutDescription} />

		<Button --color={colors.golden}>
			<a href="/albums" class="nav-link"> {resources.discover}</a>
		</Button>
	</div>

	<div class="parent">
		<div class={`francis${gridKey}`}>
			<img
				class="francis-img"
				src={"images/FRANCIS LEON GIRAUD PHOTO.jpg"}
				alt={resources.francisGiraud}
				loading="lazy"
			/>
		</div>
		{#each homeSelection as picture, index}
			<div class={`div${index + 1}${gridKey}`}>
				<HomeImage picture={homeSelection[index]} />
			</div>
		{/each}
	</div>
</div>

<style>
	.homeContainer {
		display: flex;
		flex-direction: column;
		margin: 16px 0 96px 0;
		align-items: center;
	}

	@media (min-width: 1920px) {
		.homeContainer {
			margin: 16px 10% 96px 10%;
		}
	}

	.nav-link {
		text-decoration: none;
		color: var(--eerieBlack);
	}

	.homeDescription {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 16px 0 64px 0;
	}

	.parent {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(8, 1fr);
		grid-row-gap: 5px;
		width: 100%;
	}

	.francis-img {
		width: 100%;
	}

	@media (min-width: 760px) {
		.parent {
			display: grid;
			grid-template-columns: repeat(6, 1fr);
			grid-template-rows: repeat(8, 200px);

			width: 100%;
			grid-column-gap: 5px;
			grid-row-gap: 5px;
		}

		.div1 {
			grid-area: 1 / 4 / 2 / 5;
		}
		.div2 {
			grid-area: 2 / 4 / 3 / 5;
		}
		.div3 {
			grid-area: 4 / 5 / 6 / 7;
		}
		.francis {
			grid-area: 1 / 5 / 3 / 7;
		}
		.div4 {
			grid-area: 6 / 5 / 8 / 7;
		}
		.div5 {
			grid-area: 1 / 1 / 4 / 4;
		}
		.div6 {
			grid-area: 4 / 3 / 6 / 5;
		}
		.div7 {
			grid-area: 5 / 2 / 6 / 3;
		}
		.div8 {
			grid-area: 6 / 1 / 9 / 4;
		}

		.francis-img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		.div1-alt {
			grid-area: 2 / 2 / 5 / 4;
		}
		.div2-alt {
			grid-area: 5 / 1 / 7 / 2;
		}
		.div3-alt {
			grid-area: 7 / 1 / 9 / 2;
		}
		.div4-alt {
			grid-area: 2 / 4 / 4 / 5;
		}
		.div5-alt {
			grid-area: 3 / 5 / 6 / 7;
		}
		.div6-alt {
			grid-area: 1 / 6 / 3 / 7;
		}
		.div7-alt {
			grid-area: 1 / 1 / 3 / 2;
		}
		.div8-alt {
			grid-area: 7 / 5 / 9 / 6;
		}
		.francis-alt {
			grid-area: 5 / 3 / 8 / 5;
		}

		.div1-alt1 {
			grid-area: 1 / 1 / 3 / 2;
		}
		.div2-alt1 {
			grid-area: 2 / 2 / 5 / 4;
		}
		.div3-alt1 {
			grid-area: 1 / 4 / 4 / 6;
		}
		.div4-alt1 {
			grid-area: 4 / 5 / 7 / 7;
		}
		.div5-alt1 {
			grid-area: 6 / 4 / 8 / 5;
		}
		.div6-alt1 {
			grid-area: 1 / 6 / 3 / 7;
		}
		.div7-alt1 {
			grid-area: 5 / 3 / 7 / 4;
		}
		.div8-alt1 {
			grid-area: 7 / 6 / 9 / 7;
		}
		.francis-alt1 {
			grid-area: 5 / 1 / 8 / 3;
		}
	}
</style>
