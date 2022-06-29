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
		<nav>
			<ul>
				<li><a href="/imprint">Impressum</a></li>
			</ul>
		</nav>
	</footer>
</div>

<style>
</style>
