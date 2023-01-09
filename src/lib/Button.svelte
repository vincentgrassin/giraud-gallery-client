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
		box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	}
	button:hover {
		background-color: var(--golden);
	}
	button:focus-visible {
		border: solid var(--darkGrey) 2px;
	}
	button:disabled {
		background-color: var(--golden);
	}
</style>
