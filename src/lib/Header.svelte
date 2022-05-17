<script lang="ts">
	import { resources } from "../resources";
	import { page } from "$app/stores";

	import type { NavigationTab } from "../types";
	export let activeTab: string = "home";
	const handleActiveTab = (tab: NavigationTab) => {
		activeTab = tab.id;
	};
	const tabs: NavigationTab[] = [
		{ label: resources.home, id: "home", path: "/" },
		{ label: resources.about, id: "about", path: "/about" },
		{ label: resources.search, id: "search", path: "/search" }
	];
</script>

<nav class="nav-header">
	<ul class="list">
		{#each tabs as tab}
			<li class="nav-item">
				<a
					class="nav-link"
					class:active={$page.url.pathname === tab.path}
					href={tab.path}
					on:click={() => handleActiveTab(tab)}>{tab.label}</a
				>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.nav-header {
		height: 64px;
		background-color: var(--metallicBlue);
	}
	.list {
		display: flex;
		height: 100%;
		align-items: center;
		margin: 0px 16px 0px 16px;
	}
	.nav-item {
		min-width: 100px;
		height: 100%;
	}
	.nav-link {
		color: var(--white);
		text-decoration: none;
		height: 100%;
		display: flex;
		align-items: center;
	}
	.nav-item:hover,
	.active {
		background-color: var(--lightGrey);
	}
</style>
