<script context="module" lang="ts">
	import SectionCard from '$lib/SectionCard.svelte';

	export const prerender = true;
</script>

<svelte:head>
	<title>inforbi.de</title>
	<meta name="description" content="inforbi.de - Korbinian Stein" />
	<meta
		name="keywords"
		content="inforbi, korbinian, stein, korbinian stein, korbinianstein, developer, web, web developer, webdesign, webdesigner, webdesigner korbinian stein"
	/>
</svelte:head>

<SectionCard>
	<h1 class="text-2xl font-bold">Über mich</h1>
	<img
		src="new_me.webp"
		width="200px"
		alt="Korbinian Stein"
		id="me"
		class="my-5 mx-auto max-w-[200px] rounded-xl border-green-700 border-2"
	/>
	<h2 class="text-xl leading-none">Korbinian Stein</h2>
	<small>leidenschaftlicher Informatiker</small>
	<ul>
		<li class="m-2 font-bold text-lg">Interessen</li>
		<li class="m-1">frühe Entdeckung der technischen Ader</li>
		<li class="m-1">Beherrschung des Programmierens durch eigenständiges Lernen</li>
		<li class="m-1">Faszination für Computerarchitektur und Philosophie</li>
		<li class="m-1">schnelle Lernfähigkeit für neue Programmiersprachen</li>
		<li class="m-2 font-bold text-lg">Auszug aus dem Lebenslauf</li>
		<li class="m-1">Selbständige Tätigkeit im Informatikbereich seit März 2017</li>
		<li class="m-1">Studium des B.Sc. Informatik seit Oktober 2017</li>
		<li class="m-1">
			Co-Founder und CTO des ehrenamtlichen Start-Ups <a href="/portfolio" class="underline"
				>naklar.io</a
			>
		</li>
	</ul>
</SectionCard>

<style>
</style>
