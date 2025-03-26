<script>
	import SectionCard from '$lib/SectionCard.svelte';
	import { GlobeIcon, BriefcaseIcon, CodeIcon, LaptopIcon, GithubIcon, InfoIcon } from '$lib/components/svg';
</script>

<svelte:head>
	<title>inforbi.de - Portfolio</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<h1 class="text-4xl font-bold mb-8 text-green-900 text-center">Portfolio</h1>
	
	<div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-700">
		<h2 class="text-2xl font-semibold mb-5 text-green-900 flex items-center justify-center">
			<GlobeIcon className="mr-3" />
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
					<BriefcaseIcon className="mr-2" />
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
					<CodeIcon className="mr-2" />
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
			<LaptopIcon className="mr-3" />
			Quanti-GIN
		</h2>
		<a href="https://github.com/nylser/quanti-gin" target="_blank" rel="noopener noreferrer" class="block text-center mb-4">
			<div class="inline-block bg-gray-100 p-3 rounded-lg hover:shadow-md transition-shadow">
				<GithubIcon size="h-10 w-10" className="mx-auto" />
				<span class="text-sm text-gray-700 block mt-1">View on GitHub</span>
			</div>
		</a>
		
		<div class="grid md:grid-cols-2 gap-6 mt-6">
			<div class="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
				<h3 class="text-xl font-medium mb-2 text-green-800 flex items-center">
					<InfoIcon className="mr-2" />
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
					<CodeIcon className="mr-2" />
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
