<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<div class="wrapper">
	<Header />
	<main class="container px-5 mx-auto">
		<slot />
	</main>

	<footer>
		<nav class="flex justify-center">
			<a href="/imprint" class="text-green-900">Impressum</a>
		</nav>
	</footer>
</div>

<style>
</style>
