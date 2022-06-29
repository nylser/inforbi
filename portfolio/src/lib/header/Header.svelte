<script lang="ts" context="module">
	const routes = [
		{ path: '/', name: 'Über mich' },
		{ path: '/portfolio', name: 'Portfolio' },
		{ path: '/contact', name: 'Kontakt' }
	];
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { spring } from 'svelte/motion';
	$: path = $page.url.pathname;
	let minimized = false;
	let width = 100;
	$: minIcon = minimized ? '📂' : '❌';
	$: minimized ? hidden.set(-width) : hidden.set(0);

	const hidden = spring(0, {
		stiffness: 0.1,
		damping: 0.25
	});

	const toggleHide = () => {
		minimized = !minimized;
	};
</script>

<header style="transform: translateX({$hidden}px)">
	<a class="logo" href="/" sveltekit:prefetch bind:clientWidth={width}
		><img src="Logo_transparent.webp" alt="" /></a
	>
	<nav>
		<button on:click={toggleHide}>{minIcon}</button>
		{#each routes as route}
			<a href={route.path} sveltekit:prefetch class:selected={path === route.path}>{route.name}</a>
		{/each}
	</nav>
</header>

<style>
	nav > button {
		display: block;
		border: none;
		background: none;
		font-size: 1rem;
		cursor: pointer;
	}
	header {
		position: relative;
		top: 0;
		left: -50px;
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: center;
		justify-items: center;
		background-color: #fff;
		padding-left: 50px;
		width: fit-content;
		border-radius: 0 0 20px;
		box-shadow: 15px 15px 30px 10px rgba(41, 42, 42, 0.041);
	}
	@media (min-width: 1200px) {
		header {
			position: fixed;
		}
	}
	nav {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		padding: 1em;
	}
	img {
		max-height: 100px;
	}
	nav > a {
		font-size: 1rem;
		text-decoration: none;
		border-radius: 15px;
		padding: 0.5em;
		margin: 0.5em 0;
		background-color: var(--background-color);
		text-align: center;
		transition: color, background-color cubic-bezier(0.215, 0.61, 0.355, 1) 500ms;
	}

	a.selected {
		background-color: var(--primary-color);
		color: var(--background-color);
	}
</style>
