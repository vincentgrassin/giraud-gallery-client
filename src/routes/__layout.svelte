<script lang="ts">
	import "../styles/global.css";
	import { theme } from "../styles/theme";
	import Header from "$lib/Header.svelte";
</script>

<header style={theme}>
	<Header />
</header>
<main style={theme}>
	<slot />
</main>
<footer style={theme}>
	<div>footer</div>
</footer>
