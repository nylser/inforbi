<script context="module" lang="ts">
	import SectionCard from '$lib/SectionCard.svelte';
</script>

<script lang="ts">
	export let success: boolean | undefined = undefined;
	let name: string, email: string, message: string;

	function handleSubmit() {
		console.log(name, email, message);
	}
</script>

<svelte:head>
	<title>inforbi.de - Kontakt</title>
</svelte:head>

<SectionCard>
	<h1 class="text-2xl font-bold text-center mb-5">Kontakt</h1>
	{#if success}
		<p class="bg-green-600 rounded-lg p-3 text-white w-fit mx-auto border-green-900 border-2">
			Deine Anfrage wurde erfolgreich abgeschickt!
		</p>
	{:else}
		<form class="flex flex-col gap-5 text-left" method="post">
			<label class="block">
				<span class="text-gray-700">Voller Name *</span>
				<input
					type="text"
					class="mt-1 block w-full rounded-md 
				border-gray-600 shadow-sm 
				focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					name="name"
					bind:value={name}
					placeholder=""
					required
				/>
			</label>
			<label class="block">
				<span class="text-gray-700">E-Mail-Adresse *</span>
				<input
					type="email"
					class="mt-1 block w-full rounded-md 
				border-gray-600 shadow-sm 
				focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					name="email"
					bind:value={email}
					placeholder="john@example.com"
					required
				/>
			</label>
			<label class="block">
				<span class="text-gray-700">Ihre Nachricht *</span>
				<textarea
					class="mt-1 block w-full rounded-md 
				border-gray-600 shadow-sm 
				focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
					name="message"
					bind:value={message}
					maxlength="500"
					minlength="20"
					rows="3"
					required
				/>
			</label>
			<input
				type="submit"
				value="Absenden"
				class="rounded bg-green-700 ml-auto p-2 text-gray-100 cursor-pointer hover:bg-green-900 transition-colors"
			/>
		</form>
	{/if}
	<a href="/privacy" class="underline">Hinweise zum Datenschutz</a>
</SectionCard>
