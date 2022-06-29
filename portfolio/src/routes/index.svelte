<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
</script>

<svelte:head>
	<title>inforbi.de</title>
	<meta name="description" content="inforbi.de" />
</svelte:head>

<section>
	<h1>Über mich</h1>
	<img src="/new_me.jpeg" alt="Korbinian Stein" id="me" />
	<h2>Korbinian Stein</h2>
	<ul>
		<li class="lead">Interessen</li>
		<li>Frühe Entdeckung der technischen Ader</li>
		<li>Beherrschung des Programmierens durch eigenständiges Lernen</li>
		<li>Faszination für Computerarchitektur und Philosophie</li>
		<li>Schnelle Lernfähigkeit für neue Programmiersprachen</li>
		<li class="lead">Auszug aus dem Lebenslauf</li>
		<li>Selbständige im Informatikbereich seit März 2017</li>
		<li>Studium des B.Sc. Informatik seit Oktober 2017</li>
		<li>Co-Founder des ehrenamtlichen Start-Ups naklar.io</li>
	</ul>
</section>

<style>
	#me {
		height: 400px;
		border-radius: 15px;
		box-shadow: 0 6px 12px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
	}
	ul {
		list-style-type: none;
		text-align: center;
		padding: 0;
		margin: 0;
	}
	li {
		list-style: none;
		margin: 0.75em;
	}
	.lead {
		font-weight: 700;
		font-size: 1.2rem;
		margin: 1em;
	}
</style>
