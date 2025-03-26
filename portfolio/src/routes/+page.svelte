<script context="module" lang="ts">
	import SectionCard from '$lib/SectionCard.svelte';
</script>

<svelte:head>
	<title>inforbi.de</title>
	<meta name="description" content="inforbi.de - Korbinian Stein" />
	<meta
		name="keywords"
		content="inforbi, korbinian, stein, korbinian stein, korbinianstein, developer, web, web developer, webdesign, webdesigner, webdesigner korbinian stein"
	/>
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-700">
		<h1 class="text-4xl font-bold mb-6 text-green-900 text-center flex items-center justify-center">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-700 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
			</svg>
			Über mich
		</h1>
		
		<img
			src="new_me.webp"
			width="200px"
			height="300px"
			alt="Korbinian Stein"
			id="me"
			class="my-5 mx-auto max-w-[200px] rounded-xl border-green-700 border-2 shadow-md hover:shadow-lg transition-shadow"
		/>
		
		<h2 class="text-2xl font-semibold text-green-800 text-center">Korbinian Stein</h2>
		<p class="text-gray-600 text-center mb-6">leidenschaftlicher Informatiker</p>
		
		<div class="grid md:grid-cols-2 gap-6 mt-6">
			<div class="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
				<h3 class="text-xl font-medium mb-3 text-green-800 flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
					</svg>
					Interessen
				</h3>
				<ul class="list-disc list-inside space-y-1 text-gray-700">
					<li>frühe Entdeckung der technischen Ader</li>
					<li>Beherrschung des Programmierens durch eigenständiges Lernen</li>
					<li>Faszination für Computerarchitektur und Philosophie</li>
					<li>schnelle Lernfähigkeit für neue Programmiersprachen</li>
				</ul>
			</div>
			
			<div class="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
				<h3 class="text-xl font-medium mb-3 text-green-800 flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
					</svg>
					Auszug aus dem Lebenslauf
				</h3>
				<ul class="list-disc list-inside space-y-1 text-gray-700">
					<li>Selbständige Tätigkeit im Informatikbereich seit März 2017</li>
					<li>Studium des B.Sc. Informatik seit Oktober 2017</li>
					<li>
						Co-Founder und CTO des ehrenamtlichen Start-Ups <a href="/portfolio" class="text-green-700 underline hover:text-green-900 transition-colors"
							>naklar.io</a
						>
					</li>
					<li>Studium des M.Sc. Informatik seit Oktober 2022</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	.list-disc li {
		padding-left: 0.5rem;
	}
</style>
