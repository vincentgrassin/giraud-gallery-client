<script lang="ts">
	import Title from "$lib/Title.svelte";
	import { QUALITY_PICTURE, resources } from "../resources";

	import { dataAlbums } from "../dataPicture";
	import type { Picture } from "src/types";
	import { buildImageStaticPath, shuffleArray, shuffleGridDisplayKey } from "../helpers";
	import Button from "$lib/Button.svelte";
	import { colors } from "../styles/theme";

	const allPictures = Object.values(dataAlbums).reduce((acc: Picture[], album) => {
		if (album.pictures) {
			const bestPictures = album.pictures.filter(
				(picture) => picture.quality === QUALITY_PICTURE.HIGH
			);
			return [...acc, ...bestPictures];
		}
		return acc;
	}, []);

	let homeSelection = shuffleArray(allPictures).slice(0, 23);
	let gridKey = shuffleGridDisplayKey();

	const handleRefresh = () => {
		homeSelection = shuffleArray(allPictures).slice(0, 23);
		gridKey = shuffleGridDisplayKey();
	};
</script>

<div class="homeContainer">
	<Title title={resources.francisAlbums} srOnly />
	<div class="homeDescription">
		<div class="introWrapper">
			<p class="introText">
				{resources.homeIntro}
			</p>
			<p class="introText">
				{resources.homeIntro2}
			</p>
			<p class="introText">
				{resources.homeIntro3}
			</p>
		</div>
	</div>
	<div class="buttonsContainer">
		<Button --color={colors.golden} buttonType="a" href="/albums">
			{resources.discover}
		</Button>
		<div class="refresh-button">
			<Button --color={colors.golden} on:click={handleRefresh} variant="outline">
				{resources.refreshHome}
			</Button>
		</div>
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
				<img
					class="home-image"
					src={buildImageStaticPath(picture)}
					alt={picture.id}
					loading="lazy"
				/>
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

	.buttonsContainer {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-evenly;
	}

	.refresh-button {
		display: none;
	}

	.homeDescription {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 16px 0 32px 0;
		width: 90%;
	}

	.introWrapper {
		padding: 16px;
	}

	.introText {
		font-size: var(--fs3m);
		display: block;
		margin: 0;
		margin-bottom: 8px;
		text-align: center;
	}

	.home-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.parent {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(8, 1fr);
		grid-row-gap: 5px;
		margin-top: 24px;
		width: 90%;
	}

	.francis-img {
		width: 100%;
	}

	@media (min-width: 760px) and (max-width: 1199px) {
		.introWrapper {
			padding: 16px 10%;
		}
	}

	@media (min-width: 1260px) {
		.introWrapper {
			padding: 16px 25%;
		}
	}

	@media (min-width: 760px) {
		.parent {
			display: grid;
			grid-template-columns: repeat(6, 1fr);
			grid-template-rows: repeat(8, 200px);
			margin-top: 48px;
			width: 90%;
			grid-column-gap: 5px;
			grid-row-gap: 5px;
		}

		.homeDescription {
			width: 90%;
		}

		.refresh-button {
			display: block;
		}

		.div1 {
			grid-area: 1 / 1 / 3 / 2;
		}
		.div2 {
			grid-area: 2 / 2 / 4 / 3;
		}
		.div3 {
			grid-area: 2 / 3 / 5 / 4;
		}
		.div4 {
			grid-area: 3 / 1 / 5 / 2;
		}
		.div5 {
			grid-area: 4 / 2 / 6 / 3;
		}
		.div6 {
			grid-area: 5 / 3 / 8 / 5;
		}
		.div7 {
			grid-area: 3 / 4 / 5 / 5;
		}
		.div8 {
			grid-area: 7 / 6 / 9 / 7;
		}
		.div9 {
			grid-area: 1 / 4 / 3 / 5;
		}
		.div10 {
			grid-area: 3 / 6 / 5 / 7;
		}
		.div11 {
			grid-area: 4 / 5 / 6 / 6;
		}
		.div12 {
			grid-area: 5 / 6 / 7 / 7;
		}
		.div13 {
			grid-area: 6 / 5 / 9 / 6;
		}
		.div14 {
			grid-area: 6 / 1 / 8 / 2;
		}
		.div15 {
			grid-area: 6 / 2 / 9 / 3;
		}
		.div16 {
			grid-area: 1 / 2 / 2 / 3;
		}
		.div17 {
			grid-area: 1 / 3 / 2 / 4;
		}
		.div18 {
			grid-area: 3 / 5 / 4 / 6;
		}
		.div19 {
			grid-area: 3 / 5 / 4 / 6;
		}
		.div20 {
			grid-area: 5 / 1 / 6 / 2;
		}
		.div21 {
			grid-area: 8 / 1 / 9 / 2;
		}
		.div22 {
			grid-area: 8 / 3 / 9 / 4;
		}
		.div23 {
			grid-area: 8 / 4 / 9 / 5;
		}
		.francis {
			grid-area: 1 / 5 / 3 / 7;
		}

		.francis-img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
		}

		.div1-alt {
			grid-area: 1 / 3 / 3 / 4;
		}
		.div2-alt {
			grid-area: 3 / 5 / 6 / 7;
		}
		.div3-alt {
			grid-area: 2 / 4 / 4 / 5;
		}
		.div4-alt {
			grid-area: 1 / 5 / 3 / 6;
		}
		.div5-alt {
			grid-area: 1 / 4 / 2 / 5;
		}
		.div6-alt {
			grid-area: 6 / 3 / 8 / 4;
		}
		.div7-alt {
			grid-area: 6 / 5 / 8 / 7;
		}
		.div8-alt {
			grid-area: 7 / 1 / 9 / 2;
		}
		.div9-alt {
			grid-area: 6 / 2 / 8 / 3;
		}
		.div10-alt {
			grid-area: 8 / 2 / 9 / 3;
		}
		.div11-alt {
			grid-area: 8 / 3 / 9 / 4;
		}
		.div12-alt {
			grid-area: 7 / 4 / 9 / 5;
		}
		.div13-alt {
			grid-area: 8 / 5 / 9 / 6;
		}
		.div14-alt {
			grid-area: 8 / 6 / 9 / 7;
		}
		.div15-alt {
			grid-area: 4 / 1 / 7 / 2;
		}
		.div16-alt {
			grid-area: 3 / 3 / 5 / 4;
		}
		.div17-alt {
			grid-area: 5 / 3 / 6 / 4;
		}
		.div18-alt {
			grid-area: 4 / 2 / 5 / 3;
		}
		.div19-alt {
			grid-area: 5 / 2 / 6 / 3;
		}
		.div20-alt {
			grid-area: 2 / 6 / 3 / 7;
		}
		.div21-alt {
			grid-area: 1 / 6 / 2 / 7;
		}
		.div22-alt {
			grid-area: 5 / 4 / 7 / 5;
		}
		.div23-alt {
			grid-area: 4 / 4 / 5 / 5;
		}
		.francis-alt {
			grid-area: 1 / 1 / 4 / 3;
		}

		.div1-alt1 {
			grid-area: 1 / 3 / 3 / 4;
		}
		.div2-alt1 {
			grid-area: 1 / 4 / 3 / 5;
		}
		.div3-alt1 {
			grid-area: 2 / 5 / 5 / 6;
		}
		.div4-alt1 {
			grid-area: 1 / 6 / 4 / 7;
		}
		.div5-alt1 {
			grid-area: 2 / 2 / 4 / 3;
		}
		.div6-alt1 {
			grid-area: 1 / 1 / 3 / 2;
		}
		.div7-alt1 {
			grid-area: 3 / 1 / 5 / 2;
		}
		.div8-alt1 {
			grid-area: 4 / 2 / 6 / 3;
		}
		.div9-alt1 {
			grid-area: 7 / 3 / 9 / 4;
		}
		.div10-alt1 {
			grid-area: 7 / 4 / 9 / 5;
		}
		.div11-alt1 {
			grid-area: 4 / 6 / 7 / 7;
		}
		.div12-alt1 {
			grid-area: 5 / 5 / 6 / 6;
		}
		.div13-alt1 {
			grid-area: 6 / 5 / 7 / 6;
		}
		.div14-alt1 {
			grid-area: 7 / 5 / 9 / 6;
		}
		.div15-alt1 {
			grid-area: 5 / 1 / 6 / 2;
		}
		.div16-alt1 {
			grid-area: 6 / 1 / 7 / 2;
		}
		.div17-alt1 {
			grid-area: 6 / 2 / 8 / 3;
		}
		.div18-alt1 {
			grid-area: 7 / 1 / 8 / 2;
		}
		.div19-alt1 {
			grid-area: 8 / 1 / 9 / 2;
		}
		.div20-alt1 {
			grid-area: 8 / 2 / 9 / 3;
		}
		.div21-alt1 {
			grid-area: 1 / 2 / 2 / 3;
		}
		.div22-alt1 {
			grid-area: 1 / 5 / 2 / 6;
		}
		.div23-alt1 {
			grid-area: 7 / 6 / 9 / 7;
		}
		.francis-alt1 {
			grid-area: 3 / 3 / 7 / 5;
		}

		.div1-alt2 {
			grid-area: 3 / 2 / 4 / 3;
		}
		.div2-alt2 {
			grid-area: 1 / 3 / 4 / 5;
		}
		.div3-alt2 {
			grid-area: 2 / 5 / 4 / 6;
		}
		.div4-alt2 {
			grid-area: 1 / 6 / 3 / 7;
		}
		.div5-alt2 {
			grid-area: 1 / 5 / 2 / 6;
		}
		.div6-alt2 {
			grid-area: 1 / 2 / 3 / 3;
		}
		.div7-alt2 {
			grid-area: 3 / 1 / 6 / 2;
		}
		.div8-alt2 {
			grid-area: 7 / 4 / 9 / 5;
		}
		.div9-alt2 {
			grid-area: 5 / 5 / 7 / 6;
		}
		.div10-alt2 {
			grid-area: 3 / 6 / 6 / 7;
		}
		.div11-alt2 {
			grid-area: 6 / 6 / 8 / 7;
		}
		.div12-alt2 {
			grid-area: 8 / 6 / 9 / 7;
		}
		.div13-alt2 {
			grid-area: 4 / 2 / 6 / 3;
		}
		.div14-alt2 {
			grid-area: 7 / 3 / 8 / 4;
		}
		.div15-alt2 {
			grid-area: 8 / 3 / 9 / 4;
		}
		.div16-alt2 {
			grid-area: 4 / 3 / 5 / 4;
		}
		.div17-alt2 {
			grid-area: 4 / 5 / 5 / 6;
		}
		.div18-alt2 {
			grid-area: 4 / 4 / 7 / 5;
		}
		.div19-alt2 {
			grid-area: 5 / 3 / 7 / 4;
		}
		.div20-alt2 {
			grid-area: 1 / 1 / 2 / 2;
		}
		.div21-alt2 {
			grid-area: 2 / 1 / 3 / 2;
		}
		.div22-alt2 {
			grid-area: 6 / 2 / 9 / 3;
		}
		.div23-alt2 {
			grid-area: 6 / 1 / 9 / 2;
		}
		.francis-alt2 {
			grid-area: 7 / 5 / 9 / 6;
		}
	}
</style>
