<script lang="ts" context="module">
	const routes = [
		{ path: '/', name: 'Über mich' },
		{ path: '/portfolio', name: 'Portfolio' },
		{ path: '/contact', name: 'Kontakt' }
	];
</script>

<script lang="ts">
	import { page } from '$app/stores';
	$: path = $page.url.pathname;
</script>

<header class="flex shadow-lg w-fit rounded-br-2xl p-1 bg-white">
	<a class="logo" href="/" sveltekit:prefetch
		><img src="Logo.webp" alt="" class="w-52" width="200px" /></a
	>
	<nav class="flex flex-col items-stretch text-center">
		{#each routes as route}
			<a
				href={route.path}
				class="bg-slate-100 rounded-xl m-1 p-1.5 transition-colors hover:bg-slate-400 hover:text-white"
				sveltekit:prefetch
				class:bg-slate-500={path === route.path}
				class:text-white={path === route.path}>{route.name}</a
			>
		{/each}
	</nav>
</header>

<style>
</style>
