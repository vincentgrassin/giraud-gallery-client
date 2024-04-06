<script lang="ts">
	export let disabled: boolean = false;
	export let iconButton: boolean = false;
	export let tooltip: string | undefined = undefined;
	export let variant: "regular" | "outline" = "regular";
	export let size: "small" | "medium" = "medium";
	export let buttonType: "a" | "button" = "button";
	export let href: string | undefined = undefined;
</script>

{#if buttonType === "button"}
	<button
		{disabled}
		on:click
		{...$$restProps}
		class:iconButton
		class:small={size === "small"}
		class:outline-button={variant === "outline"}
		data-tooltip={tooltip}
	>
		<slot />
	</button>
{:else}
	<a
		{href}
		class:iconButton
		class:small={size === "small"}
		class:outline-button={variant === "outline"}
	>
		<slot /></a
	>
{/if}

<style>
	button {
		background-color: var(--color, var(--veryLightGrey));
		border: unset;
		padding: 1rem 1rem;
		cursor: pointer;
		box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
		font-size: var(--fontSize, var(--fsm));
		font-weight: 600;
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

	.outline-button {
		background-color: white;
		border: 2px solid var(--golden);
	}

	.outline-button:hover {
		background-color: var(--white);
		opacity: 0.8;
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
		font-size: var(--fontSize, var(--fsm));
		text-decoration: none;
		color: var(--eerieBlack);
		font-weight: 600;
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
