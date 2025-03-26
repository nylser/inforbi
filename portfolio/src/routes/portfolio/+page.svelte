<script>
	import SectionCard from '$lib/SectionCard.svelte';
</script>

<svelte:head>
	<title>inforbi.de - Portfolio</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<h1 class="text-4xl font-bold mb-8 text-green-900 text-center">Portfolio</h1>
	
	<div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-700">
		<h2 class="text-2xl font-semibold mb-5 text-green-900 flex items-center justify-center">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-700 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
			</svg>
			naklar.io
		</h2>
		<a href="https://naklar.io" target="_blank" rel="noopener noreferrer">
			<img
				src="naklar_io_screen.webp"
				alt="naklar.io Screenshot"
				class="rounded-2xl border-orange-500 border-2 hover:scale-105 transition-transform duration-200 hover:ease-out mx-auto shadow-md"
			/></a
		>
		
		<div class="grid md:grid-cols-2 gap-6 mt-6">
			<div class="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
				<h3 class="text-xl font-medium mb-2 text-green-800 flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
					</svg>
					Rollen:
				</h3>
				<ul class="list-disc list-inside space-y-1 text-gray-700">
					<li>CTO</li>
					<li>Co-Founder</li>
					<li>Projektmanager</li>
					<li>Tech-Lead</li>
				</ul>
			</div>
			
			<div class="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
				<h3 class="text-xl font-medium mb-2 text-green-800 flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
					</svg>
					Technologien:
				</h3>
				<ul class="list-disc list-inside space-y-1 text-gray-700">
					<li>Django + Django Rest Framework</li>
					<li>Angular</li>
					<li>Ionic + Capacitor</li>
					<li>Swift & Java (native Bridge)</li>
				</ul>
			</div>
		</div>
	</div>
	
	<div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-700 mt-8">
		<h2 class="text-2xl font-semibold mb-5 text-green-900 flex items-center justify-center">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-700 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
			</svg>
			Quanti-GIN
		</h2>
		<a href="https://github.com/nylser/quanti-gin" target="_blank" rel="noopener noreferrer" class="block text-center mb-4">
			<div class="inline-block bg-gray-100 p-3 rounded-lg hover:shadow-md transition-shadow">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto" viewBox="0 0 24 24" fill="currentColor">
					<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
				</svg>
				<span class="text-sm text-gray-700 block mt-1">View on GitHub</span>
			</div>
		</a>
		
		<div class="grid md:grid-cols-2 gap-6 mt-6">
			<div class="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
				<h3 class="text-xl font-medium mb-2 text-green-800 flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					Beschreibung:
				</h3>
				<p class="text-gray-700">
					Ein anpassbares Tool zur Generierung von Daten für Quantensimulationen. Die Bibliothek ermöglicht
					die einfache Erstellung größerer Simulationsreihen und Ausgabedaten zur Optimierung von
					Molekül-Grundzuständen. Standardmäßig wird Tequila als Quantum-Backend verwendet.
				</p>
			</div>
			
			<div class="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
				<h3 class="text-xl font-medium mb-2 text-green-800 flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
					</svg>
					Technologien:
				</h3>
				<ul class="list-disc list-inside space-y-1 text-gray-700">
					<li>Python</li>
					<li>Tequila (Quantum Computing Framework)</li>
					<li>Jupyter Notebook</li>
					<li>Poetry (Dependency Management)</li>
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
