<script lang="ts">
	import IntersectionObserver from "./IntersectionObserver.svelte";
	let nativeLoading = false;
</script>

<IntersectionObserver once={true} let:intersecting>
	{#if intersecting || nativeLoading}
		<slot />
	{/if}
</IntersectionObserver>
