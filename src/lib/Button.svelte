<script lang="ts">
	export let disabled: boolean = false;
	export let variant: "icon" | "regular" = "regular";
	export let tooltip: string | undefined = undefined;
	export let size: "small" | "medium" = "medium";
</script>

<button
	{disabled}
	on:click
	{...$$restProps}
	class:iconButton={variant === "icon"}
	class:small={size === "small"}
	data-tooltip={tooltip}
>
	{#if variant === "icon"}
		<slot />
	{:else}
		<span class="text-button">
			<slot />
		</span>
	{/if}
</button>

<style>
	button {
		background-color: var(--color, var(--veryLightGrey));
		border: unset;
		padding: 1rem 1rem;
		cursor: pointer;
		box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
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

	.text-button {
		font-size: var(--fontSizeMedium);
	}
</style>
