<script lang="ts">
	import { resources } from "../resources";
	import { page } from "$app/stores";

	import type { NavigationTab } from "../types";
	const tabs: NavigationTab[] = [
		{ label: resources.albums, id: "albums", path: "/albums", regex: "/album" },
		{
			label: resources.francisGiraud,
			id: "francisGiraud",
			children: [
				{
					label: resources.description,
					id: "description",
					path: "/about/description",
					regex: "/about/description"
				},
				{
					label: resources.documents,
					id: "documents",
					path: "/about/documents",
					regex: "/about/documents"
				}
			]
		},
		{
			label: resources.around,
			id: "more",
			children: [
				{ label: resources.discovery, id: "around", path: "/more/around", regex: "/more/around" },
				{
					label: resources.search,
					id: "search",
					path: "/more/search",
					regex: "/more/search"
				}
			]
		}
	];
</script>

<div class="header">
	<div class="title-container">
		<a class="title" href={"/"}>{resources.francisAlbums}</a>
	</div>
	<nav class="nav-header">
		<ul class="list">
			{#each tabs as tab}
				{#if !tab.children}
					<li class="nav-item" class:active={tab.regex && $page.url.pathname.match(tab.regex)}>
						<a class="dropdown__title" href={tab.path}>{tab.label}</a>
					</li>
				{:else}
					<li class="dropdown nav-item" class:activeDropdown={$page.url.pathname.match("/about")}>
						<button type="button" class="dropdown__title" aria-controls="sweets-dropdown">
							{tab.label}
						</button>
						<ul class="dropdown__menu" id="sweets-dropdown">
							{#each tab.children as childrenTab}
								<li class="dropdown__element">
									<a
										class="dropdown__link"
										class:activeDropdownLink={childrenTab.regex &&
											$page.url.pathname.match(childrenTab.regex)}
										href={childrenTab.path}>{childrenTab.label}</a
									>
								</li>
							{/each}
						</ul>
					</li>
				{/if}
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
		font-family: var(--handwriting);
		font-size: var(--fsxl);
		text-decoration: none;
	}

	@media (min-width: 760px) {
		.title {
			font-size: var(--fs4xl);
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
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.dropdown__link {
		display: block;
		color: var(--eerieBlack);
		padding: 0.5em;
	}

	.dropdown__link:hover {
		color: var(--golden);
	}

	.nav-item:hover,
	.active,
	.activeDropdown {
		border-bottom: 4px solid var(--golden);
		color: var(--golden);
	}
	.active a,
	.activeDropdownLink {
		color: var(--golden);
		font-weight: 700;
	}

	/* Dropdown */

	.dropdown {
		position: relative;
	}

	.dropdown:hover .dropdown__menu,
	.dropdown:focus-within .dropdown__menu {
		opacity: 1;
		transform: rotateX(0) translateX(-50%);
		visibility: visible;
	}

	.dropdown .dropdown__menu {
		background-color: #fff;
		border-radius: 4px;
		box-shadow: 0 0.15em 0.25em rgba(0, 0, 0, 0.25);
		padding: 0.5em 0;
		width: 100%;
		position: absolute;

		top: calc(100% - 0.25rem);
		left: 50%;
		transform: rotateX(-90deg) translateX(-50%);
		transform-origin: top center;
		opacity: 0.3;
		transition: 280ms all 300ms ease-out;
	}

	.dropdown__title {
		background-color: transparent;
		border: none;
		font-family: inherit;
		color: var(--eerieBlack);
		cursor: pointer;
	}

	.dropdown__title:hover {
		color: var(--golden);
	}

	.dropdown__element:hover {
		cursor: pointer;
	}

	nav > ul > li a,
	nav > ul > li .dropdown__title {
		text-decoration: none;
		text-align: center;
		display: inline-block;
		font-size: 1.125rem;
	}
	nav > ul > li > a,
	nav > ul > li .dropdown__title {
		padding: 1rem 0.5rem;
	}
</style>
