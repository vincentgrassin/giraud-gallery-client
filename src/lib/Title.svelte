<script lang="ts">
	export let title: string;
	export let srOnly: boolean = false;
	export let variant: "h1" | "h2" = "h1";
</script>

{#if variant === "h1"}
	<h1 class="h1" class:sr-only={srOnly}>
		{title}
	</h1>
{:else if variant === "h2"}
	<h2 class="h2" class:sr-only={srOnly}>
		{title}
	</h2>
{:else}
	<p class:sr-only={srOnly}>{title}</p>
{/if}

<style>
	.h1 {
		margin: 24px 0;
		text-align: center;
	}

	.h2 {
		margin: 8px 0;
	}

	.sr-only {
		position: absolute;
		left: -10000px;
		top: auto;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}

	@media (min-width: 760px) {
		.h1 {
			margin: 64px 0 48px 0;
		}

		.h2 {
			margin: 8px 0;
		}
	}
</style>
