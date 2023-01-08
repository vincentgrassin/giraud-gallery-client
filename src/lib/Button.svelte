<script lang="ts">
	export let disabled: boolean = false;
</script>

<button {disabled} on:click {...$$restProps}>
	<slot />
</button>

<style>
	button {
		background-color: var(--veryLightGrey);
		border: unset;
		border-radius: 40px;
		padding: 1rem 1rem;
		cursor: pointer;
	}
	button:hover {
		background-color: var(--silverGrey);
	}
	button:focus-visible {
		border: solid var(--darkGrey) 2px;
	}
	button:disabled {
		border: solid var(--darkGrey) 1px;
		background-color: var(--veryLightGrey);
	}
</style>
