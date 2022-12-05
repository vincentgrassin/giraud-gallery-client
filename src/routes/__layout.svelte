<script lang="ts">
	import "../styles/global.css";
	import { theme } from "../styles/theme";
	import Header from "$lib/Header.svelte";
	import Footer from "$lib/Footer.svelte";
</script>

<header style={theme}>
	<Header />
</header>
<main style={theme}>
	<slot />
</main>
<footer style={theme}>
	<Footer />
</footer>
