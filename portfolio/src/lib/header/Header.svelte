<script lang="ts" context="module">
	const routes = [
		{ path: '/', name: 'Über mich' },
		{ path: '/portfolio', name: 'Portfolio' },
		{ path: '/services', name: 'Dienste' },
		{ path: '/contact', name: 'Kontakt' }
	];
</script>

<script lang="ts">
	import { page } from '$app/stores';
	$: path = $page.url.pathname;
</script>

<header
	class="flex flex-wrap shadow-lg justify-center rounded-b-2xl rounded-t-2xl sm:rounded-t-none p-1 bg-white mx-auto w-fit"
>
	<a class="logo" href="/"
		><img src="/Logo.webp" alt="Home" class="w-52" width="210px" height="90px" /></a
	>
	<nav class="flex flex-row flex-wrap items-center text-center">
		{#each routes as route}
			<a
				href={route.path}
				class="bg-slate-100 rounded-xl m-1 p-1.5 transition-colors hover:bg-slate-400 hover:text-white"
				class:bg-slate-500={path === route.path}
				class:text-white={path === route.path}>{route.name}</a
			>
		{/each}
	</nav>
</header>

<style>
</style>
