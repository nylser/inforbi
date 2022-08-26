<script>
	import SectionCard from '$lib/SectionCard.svelte';
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
	<h3 class="text-lg font-semibold mt-3">Rollen:</h3>
	<ul class="leading-tight">
		<li>CTO</li>
		<li>Co-Founder</li>
		<li>Projektmanager</li>
		<li>Tech-Lead</li>
	</ul>
	<h3 class="text-lg font-semibold mt-3">Technologien:</h3>
	<ul class="leading-tight">
		<li>Django + Django Rest Framework</li>
		<li>Angular</li>
		<li>Ionic + Capacitor</li>
		<li>Swift & Java (native Bridge)</li>
	</ul>
</SectionCard>
