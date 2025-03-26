<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import { GithubIcon } from '$lib/components/svg';
	import '../app.css';
</script>

<div class="wrapper antialiased">
	<Header />
	<div>
		<main class="container lg:px-5 mx-auto">
			<slot />
		</main>
		<footer class="m-5">
			<nav class="flex justify-center gap-2 items-center">
				<a href="/imprint" class="text-green-900">Impressum</a>
				<a href="/privacy" class="text-green-900">Datenschutzerklärung</a>
				<span class="text-gray-400 mx-1">|</span>
				<a href="https://github.com/nylser" target="_blank" rel="noopener noreferrer" class="flex items-center text-green-900 hover:text-green-700">
					<GithubIcon className="mr-1" />
					GitHub
				</a>
			</nav>
		</footer>
	</div>
</div>

<style>
</style>
