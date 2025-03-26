<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="container mx-auto px-4 py-8">
	<h1 class="text-4xl font-bold mb-8 text-green-900 text-center">Dienste</h1>
	
	<div class="grid md:grid-cols-2 gap-8">
		<div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-700">
			<div class="flex items-center mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-green-700 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
				</svg>
				<h2 class="text-2xl font-semibold text-green-900">Deep System Debugging</h2>
			</div>
			<p class="mb-4 text-gray-700">
				Ich biete fundierte und professionelle Debugging-Services speziell für KI-generierte Codebasen an, die durch moderne Modelle wie GPT, Claude oder GitHub Copilot erstellt wurden.
			</p>
			<ul class="list-disc list-inside space-y-2 text-gray-700">
				<li>Strukturanalyse und Optimierung von KI-generiertem Code</li>
				<li>Behebung typischer Probleme in Code-Completion-Ergebnissen</li>
				<li>Refactoring unzusammenhängender KI-Codeteile</li>
				<li>Korrektur von Fehleinschätzungen durch KI-Modelle</li>
				<li>Integration von KI-generiertem Code in bestehende Codebasen</li>
			</ul>
		</div>

		<div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-700">
			<div class="flex items-center mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-green-700 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
				</svg>
				<h2 class="text-2xl font-semibold text-green-900">Security Auditing</h2>
			</div>
			<p class="mb-4 text-gray-700">
				Umfassende Sicherheitsanalysen für KI-generierte Codeteile mit Fokus auf KI-spezifische Schwachstellen und problematische Codemuster.
			</p>
			<ul class="list-disc list-inside space-y-2 text-gray-700">
				<li>Erkennung von KI-erzeugten Sicherheitslücken</li>
				<li>Prüfung auf unvollständige Sicherheitsmechanismen</li>
				<li>Identifikation von Halluzinationen in API-Aufrufen</li>
				<li>Aufdeckung von Prompt-Injection-Schwachstellen</li>
				<li>Verbesserung KI-generierter Authentication-Flows</li>
			</ul>
		</div>
	</div>

	<div class="mt-8 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-700">
		<div class="flex items-center mb-4">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-green-700 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
			</svg>
			<h2 class="text-2xl font-semibold text-green-900">Meine Qualifikationen</h2>
		</div>
		
		<div class="grid md:grid-cols-2 gap-6">
			<div class="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
				<h3 class="text-xl font-medium mb-2 text-green-800 flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
					</svg>
					Technologie-Stack
				</h3>
				<p class="mb-3 text-gray-700">
					Meine Expertise umfasst ein breites Spektrum an Technologien, die es mir ermöglichen, KI-generierten Code in verschiedensten Umgebungen zu optimieren:
				</p>
				<ul class="list-disc list-inside space-y-1 text-gray-700">
					<li>Tiefgreifendes Verständnis moderner Web-Technologien (siehe <a href="/portfolio" class="text-green-700 underline">Portfolio</a>)</li>
					<li>Umfassende Erfahrung mit Python, TypeScript/JavaScript und Golang</li>
					<li>Fundierte Kenntnisse in Low-Level-Sprachen wie Rust, C und C++</li>
					<li>Backend- und Frontend-Architekturen</li>
					<li>Containerisierte Workflows mit Docker und Kubernetes</li>
					<li>Umfangreiches Linux-Know-how für Systemoptimierung</li>
					<li>Praxiserfahrung mit Cloud-Providern (AWS, Google Cloud, Hetzner)</li>
				</ul>
			</div>
			
			<div class="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
				<h3 class="text-xl font-medium mb-2 text-green-800 flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
					</svg>
					System-Expertise
				</h3>
				<p class="mb-3 text-gray-700">
					Mein tiefes Systemverständnis ermöglicht es mir, komplexe Probleme auf verschiedenen Ebenen zu lösen:
				</p>
				<ul class="list-disc list-inside space-y-1 text-gray-700">
					<li>Tiefgreifende Analyse von Systemarchitekturen</li>
					<li>Performance-Optimierung auf Code- und Infrastrukturebene</li>
					<li>Debugging komplexer Systeme und verteilter Anwendungen</li>
					<li>Sicherheitsaudits und Vulnerability-Management</li>
					<li>Optimierung von Build- und Deployment-Prozessen</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="mt-8 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-700">
		<div class="flex items-center mb-4">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-green-700 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
			</svg>
			<h2 class="text-2xl font-semibold text-green-900">Warum KI-Code-Spezialisierung?</h2>
		</div>
		<p class="text-gray-700">
			KI-generierter Code weist spezifische Muster und Herausforderungen auf, die sich von manuell geschriebenem Code unterscheiden. 
			Meine Expertise liegt in der Erkennung und Behebung dieser KI-spezifischen Probleme. Durch intensive Auseinandersetzung mit den führenden 
			KI-Codemodellen kann ich typische Fehlerquellen identifizieren und korrigieren, während ich die Vorteile der KI-Unterstützung 
			in der Entwicklung optimal nutze.
		</p>
	</div>

	<div class="mt-8 text-center">
		<a
			href="/contact"
			class="inline-block bg-green-900 text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-colors font-medium shadow-md hover:shadow-lg"
		>
			Kontaktieren Sie mich für ein unverbindliches Erstgespräch
		</a>
	</div>
</div>

<style>
	.list-disc li {
		padding-left: 0.5rem;
	}
</style> 