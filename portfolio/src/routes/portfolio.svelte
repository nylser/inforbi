<script context="module" lang="ts">
	import SectionCard from '$lib/SectionCard.svelte';

	export const prerender = true;
</script>

<svelte:head>
	<title>inforbi.de - Portfolio</title>
</svelte:head>

<h1 class="text-2xl font-bold px-5 pt-5">Portfolio</h1>
<SectionCard>
	<h2 class="text-xl font-semibold text-center mb-5">naklar.io</h2>
	<a href="https://naklar.io" target="_blank" rel="noopener noreferrer">
		<img
			src="naklar_io_screen.webp"
			alt="naklar.io Screenshot"
			class="rounded-2xl border-orange-500 border hover:scale-105 transition-transform duration-200 hover:ease-out mx-auto"
		/></a
	>
</SectionCard>
