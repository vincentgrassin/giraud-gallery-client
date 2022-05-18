<script lang="ts">
	import { resources } from "../resources";
	import type { Picture } from "../types";
	export let picture: Picture;
	import Modal from "./Modal.svelte";
	export let isModalVisible: boolean = false;
	// export let isDetailsVisible: boolean = false;
	// export let onMouseLeave: (isVisible: boolean) => void;
	// export const handleMouseOut = () => {
	// 	console.log("out");
	// };

	export const handleModalChange = (isVisible: boolean) => {
		isModalVisible = isVisible;
	};
</script>

<div class="picture-details">
	<p>{picture.name}</p>
	<div>
		{#if picture.tags}
			{#each picture.tags as tag}
				<div>{tag}</div>
			{/each}
		{/if}
	</div>
	<button on:click={() => handleModalChange(true)}>{resources.addTag}</button>
	<Modal isVisible={isModalVisible} onModalChange={handleModalChange} tags={picture.tags} />
</div>

<style>
	.picture-details {
		position: absolute;
		background-color: aqua;
		top: 8px;
		left: 8px;
		/* pointer-events: none; */
	}
</style>
