<script context="module" lang="ts">
	import SectionCard from '$lib/SectionCard.svelte';
	import { PersonIcon, LightbulbIcon, CalendarIcon } from '$lib/components/svg';
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
			<PersonIcon size="h-8 w-8" color="text-green-700" className="mr-3" />
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
					<LightbulbIcon className="mr-2" />
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
					<CalendarIcon className="mr-2" />
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
