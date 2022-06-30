<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<div class="wrapper">
	<Header />
	<main class="container lg:px-5 mx-auto">
		<slot />
	</main>

	<footer class="m-5">
		<nav class="flex justify-center gap-2">
			<a href="/imprint" class="text-green-900">Impressum</a>
			<a href="/privacy" class="text-green-900">Datenschutzerklärung</a>
		</nav>
	</footer>
</div>

<style>
</style>
