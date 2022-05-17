<script lang="ts">
	import { resources } from "../resources";
	import { page } from "$app/stores";

	import type { NavigationTab } from "../types";
	const tabs: NavigationTab[] = [
		{ label: resources.home, id: "home", path: "/", regex: "/(album|$)" },
		{ label: resources.search, id: "search", path: "/search", regex: "/search" },
		{ label: resources.about, id: "about", path: "/about", regex: "/about" }
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
		height: 64px;
		background-color: var(--munsellBlue);
		display: flex;
		justify-content: space-evenly;
	}
	.list {
		display: flex;
		max-width: 50%;
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
