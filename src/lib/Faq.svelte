<script lang="ts">
	import Title from "./Title.svelte";

	export let title: string;
</script>

<div class="faq">
	<Title variant="h2" {title} />
	<slot />
</div>

<style>
	.faq {
		margin: 16px;
	}
</style>
