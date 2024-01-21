<script lang="ts">
	export let disabled: boolean = false;
	export let variant: "icon" | "regular" = "regular";
	export let tooltip: string | undefined = undefined;
	export let size: "small" | "medium" = "medium";
	export let buttonType: "a" | "button" = "button";
	export let href: string | undefined = undefined;
</script>

{#if buttonType === "button"}
	<button
		{disabled}
		on:click
		{...$$restProps}
		class:iconButton={variant === "icon"}
		class:small={size === "small"}
		data-tooltip={tooltip}
	>
		<slot />
	</button>
{:else}
	<a {href} class:iconButton={variant === "icon"} class:small={size === "small"}> <slot /></a>
{/if}

<style>
	button {
		background-color: var(--color, var(--veryLightGrey));
		border: unset;
		padding: 1rem 1rem;
		cursor: pointer;
		box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
		font-size: var(--fontSize, var(--fontSizeMedium));
	}

	button:hover {
		background-color: var(--color, var(--veryLightGrey));
		opacity: 0.8;
	}
	button:focus-visible {
		border: solid var(--darkGrey) 2px;
	}
	button:disabled {
		background-color: var(--golden);
	}
	.iconButton {
		border-radius: 40px;
	}
	.small {
		padding: 0.5rem 0.5rem;
	}

	a {
		background-color: var(--color, var(--veryLightGrey));
		border: unset;
		padding: 1rem 1rem;
		cursor: pointer;
		box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
		font-size: var(--fontSize, var(--fontSizeMedium));
		text-decoration: none;
		color: var(--eerieBlack);
	}

	a:hover {
		background-color: var(--color, var(--veryLightGrey));
		opacity: 0.8;
	}
	a:focus-visible {
		border: solid var(--darkGrey) 2px;
	}
	button:disabled {
		background-color: var(--golden);
	}
</style>
