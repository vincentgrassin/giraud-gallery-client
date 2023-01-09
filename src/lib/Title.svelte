<script lang="ts">
	export let title: string;
</script>

<h1 class="title">
	{title}
</h1>

<style>
	.title {
		margin: 24px 0;
		text-align: center;
	}

	@media (min-width: 760px) {
		.title {
			margin: 64px 0;
		}
	}
</style>
