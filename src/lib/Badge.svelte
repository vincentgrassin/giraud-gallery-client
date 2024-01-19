<script lang="ts">
	export let content: string;
</script>

<div class="badge">
	{content}
</div>

<style>
	.badge {
		display: inline-block;
		padding: 0.3em 0.6em;
		border-radius: 0.25em;
		background-color: var(--color);
		color: white;
		font-weight: bold;
	}
</style>
