<script lang="ts">
	import Faq from "$lib/Faq.svelte";
	import PageLayout from "$lib/PageLayout.svelte";
	import Title from "$lib/Title.svelte";
	import { resources } from "../../resources";
</script>

<PageLayout>
	<Title variant="h1" title={resources.about} />
	<div class="description">
		<Faq title={resources.albumsGathering}>
			<p class="text">{resources.albumsGatheringDetails}</p>
		</Faq>
		<Faq title={resources.albumsGathering2}>
			<p class="text">{resources.albumsGatheringDetails2}</p>
		</Faq>
		<Faq title={resources.albumsGathering3}>
			<p class="text">{resources.albumsGatheringDetails31}</p>
			<div class="example">
				<p><em>{resources.album}</em></p>
				<div class="image-wrapper">
					<img
						class="img-about"
						src={"../images/carnet1.jpg"}
						alt={"exemple de carnet"}
						loading="lazy"
					/>
					<img
						class="img-about"
						src={"../images/carnet2.jpg"}
						alt={"exemple de carnet 2"}
						loading="lazy"
					/>
				</div>
			</div>
			<p class="text">{resources.albumsGatheringDetails32}</p>
			<p class="text">{resources.albumsGatheringDetails33}</p>
			<div class="example">
				<p><em>{resources.diary}</em></p>
				<div class="image-wrapper">
					<img
						class="img-about"
						src={"../images/journal1.png"}
						alt={"exemple de journal 1"}
						loading="lazy"
					/>
					<img
						class="img-about"
						src={"../images/journal2.jpg"}
						alt={"exemple de journal 2"}
						loading="lazy"
					/>
				</div>
			</div>
		</Faq>
		<Faq title={resources.albumsGathering4}>
			<p class="text">{resources.albumsGatheringDetails4}</p>
		</Faq>
		<Faq title={resources.albumsGathering5}>
			<p class="text">{resources.albumsGatheringDetails5}</p>
		</Faq>
		<div class="contact">
			<p>{resources.contact1}</p>
			<p>{resources.contact2}</p>
		</div>
	</div>
</PageLayout>

<style>
	.description {
		margin: 16px 0 32px 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.text {
		margin: 32px 0 32px 0;
	}

	.example {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.image-wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.img-about {
		width: 100%;
		padding: 4px;
		height: 100%;
	}

	.contact {
		display: flex;
		width: 100%;
		flex-direction: column;
		font-weight: bold;
		margin-top: 32px;
		align-items: end;
	}

	@media (min-width: 760px) {
		.image-wrapper {
			display: flex;
			flex-direction: row;
		}
		.contact {
			flex-direction: row;
			justify-content: space-evenly;
		}
	}
</style>
