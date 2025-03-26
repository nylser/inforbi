<script lang="ts">
	import { page } from '$app/stores';
	import { CodeIcon, LockIcon, FlaskIcon, ChipIcon, LightningIcon } from '$lib/components/svg';
</script>

<div class="container mx-auto px-4 py-8">
	<h1 class="text-4xl font-bold mb-8 text-green-900 text-center">Dienste</h1>
	
	<div class="grid md:grid-cols-2 gap-8">
		<div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-700">
			<div class="flex items-center mb-4">
				<CodeIcon size="h-10 w-10" className="mr-3" />
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
				<LockIcon className="mr-3" />
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
			<FlaskIcon className="mr-3" />
			<h2 class="text-2xl font-semibold text-green-900">Meine Qualifikationen</h2>
		</div>
		
		<div class="grid md:grid-cols-2 gap-6">
			<div class="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
				<h3 class="text-xl font-medium mb-2 text-green-800 flex items-center">
					<ChipIcon className="mr-2" />
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
					<CodeIcon className="mr-2" />
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
			<LightningIcon className="mr-3" />
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