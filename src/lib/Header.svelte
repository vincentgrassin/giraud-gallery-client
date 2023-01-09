<script lang="ts">
	import { resources } from "../resources";
	import { page } from "$app/stores";

	import type { NavigationTab } from "../types";
	const tabs: NavigationTab[] = [
		{ label: resources.albums, id: "home", path: "/", regex: "/(album|$)" },
		{ label: resources.bestOf, id: "search", path: "/search", regex: "/search" },
		{ label: resources.francisGiraud, id: "about", path: "/about", regex: "/about" }
	];
</script>

<div class="header">
	<div class="title-container">
		<p class="title">{resources.francisAlbums}</p>
	</div>
	<nav class="nav-header">
		<ul class="list">
			{#each tabs as tab}
				<li class="nav-item" class:active={$page.url.pathname.match(tab.regex)}>
					<a class="nav-link" href={tab.path}>{tab.label}</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>

<style>
	.header {
		background-color: var(--eerieBlack);
		height: var(--headerHeight);
		display: flex;
		flex-direction: column;
	}

	.title-container {
		height: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.title {
		margin: 0;
		color: var(--white);
	}

	@media (min-width: 760px) {
		.title {
			font-size: var(--fontSizeBig);
		}
	}
	.nav-header {
		height: 50%;
		display: flex;
		justify-content: space-evenly;
		background-color: var(--white);
		border-bottom: 1px solid var(--eerieBlack);
	}
	.list {
		display: flex;
		flex: 1;
	}

	@media (min-width: 760px) {
		.list {
			max-width: 60%;
		}
	}
	.nav-item {
		width: 100%;
		height: 100%;
		border-bottom: 4px solid var(--eerieBlack);
	}

	.nav-item:hover,
	.active {
		color: var(--golden);
		border-bottom: 4px solid var(--golden);
	}
	.nav-link {
		color: var(--eerieBlack);
		text-decoration: none;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
	}

	.nav-link:hover,
	.active {
		color: var(--golden);
	}
</style>
