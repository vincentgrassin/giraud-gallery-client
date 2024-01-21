<script lang="ts">
</script>

<div class="mainContainer">
	<div class="container">
		<slot />
	</div>
</div>

<style>
	.mainContainer {
		display: flex;
		flex-direction: column;
		margin: 16px 0 96px 0;
		width: 100%;
		align-items: center;
	}

	.container {
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (min-width: 1260px) {
		.container {
			width: 60%;
		}
	}
</style>
