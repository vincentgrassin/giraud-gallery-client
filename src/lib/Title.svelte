<script lang="ts">
	export let title: string;
	export let variant: "h1" | "h2" = "h1";
</script>

{#if variant === "h1"}
	<h1 class="h1">
		{title}
	</h1>
{:else if variant === "h2"}
	<h2 class="h2">
		{title}
	</h2>
{:else}
	<p>{title}</p>
{/if}

<style>
	.h1 {
		margin: 24px 0;
		text-align: center;
	}

	.h2 {
		margin: 8px 0;
	}

	@media (min-width: 760px) {
		.h1 {
			margin: 64px 0;
		}

		.h2 {
			margin: 16px 0;
		}
	}
</style>
