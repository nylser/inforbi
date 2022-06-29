<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<div class="wrapper">
	<Header />
	<main>
		<slot />
	</main>

	<footer>
		<nav>
			<ul>
				<li><a href="/imprint">Impressum</a></li>
			</ul>
		</nav>
	</footer>
</div>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.wrapper > * {
		flex-shrink: 0;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: auto;
	}

	footer li {
		list-style: none;
	}

	@media (min-width: 480px) {
		footer {
			padding: 20px 0;
		}
	}

	.wrapper {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}
</style>
