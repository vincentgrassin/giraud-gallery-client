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

<nav class="nav-header">
	<ul class="list">
		{#each tabs as tab}
			<li class="nav-item" class:active={$page.url.pathname.match(tab.regex)}>
				<a class="nav-link" href={tab.path}>{tab.label}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.nav-header {
		height: var(--headerHeight);
		background-color: var(--metallicBlue);
		display: flex;
		justify-content: space-evenly;
	}
	.list {
		display: flex;
		max-width: 60%;
		flex: 1;
	}
	.nav-item {
		width: 100%;
		height: 100%;
	}
	.nav-link {
		color: var(--white);
		text-decoration: none;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
	}
	.nav-item:hover,
	.active {
		background-color: var(--columbiaBlue);
	}
</style>
