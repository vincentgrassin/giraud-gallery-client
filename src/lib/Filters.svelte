<script lang="ts">
	function validate() {
		console.log("I'm the validate() function");
	}

	function handleOnSubmit() {
		console.log("I'm the handleOnSubmit() in App.svelte", $filters);
	}
	import { writable } from "svelte/store";

	const filters = writable({
		isQuality: false,
		dates: [],
		email: "tcarvalhovb@gmail.com"
	});
	let selectedDates = [];
	const dates = ["1990", "1989"];

	$: {
		console.log(selectedDates);
		console.log({ filters: $filters });
		filters.update((fs) => {
			fs.dates = selectedDates;
			return fs;
		});
	}
</script>

<div>
	<div>filters</div>
	<form class="form" on:submit|preventDefault={handleOnSubmit}>
		<label>Dates</label>
		{#each dates as date}
			<label>
				<input type="checkbox" bind:group={selectedDates} value={date} />
				{date}
			</label>
		{/each}
		<!-- <input type="text" bind:value={$filters.dates} value={selectedDates} /> -->
		<label>isQuality</label>
		<input type="text" bind:value={$filters.isQuality} />
		<label>Mail</label>
		<input type="text" bind:value={$filters.email} />
		<button type="submit"> Please save me </button>
	</form>
</div>

<style>
	.form {
	}
</style>
