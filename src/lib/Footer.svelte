<script lang="ts">
	import { resources } from "../resources";
	import "../styles/global.css";
</script>

<div class="footer">
	<p class="text">{resources.footer}</p>
	<p class="text">{resources.mail}</p>
</div>

<style>
	.footer {
		height: var(--footerHeight);
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		background-color: var(--eerieBlack);
		color: var(--white);
		position: fixed;
		bottom: 0;
		width: 100%;
	}
	.text {
		margin: 0;
	}
</style>
