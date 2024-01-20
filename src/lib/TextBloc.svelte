<script lang="ts">
	export let content: string;
	export let bold: boolean = false;
	export let smallMargin: boolean = false;
</script>

<div class="textBloc" class:smallMargin>
	<p {...$$restProps} class:bold>{content}</p>
</div>

<style>
	.textBloc {
		margin: 32px 16px 16px 16px;
		text-align: justify;
	}

	.bold {
		font-weight: bold;
	}

	.smallMargin {
		margin: 8px 16px 8px 16px;
	}
</style>
