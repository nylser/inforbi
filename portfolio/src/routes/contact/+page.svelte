<script lang="ts">
	import SectionCard from '$lib/SectionCard.svelte';
	import type { ActionData } from './$types';
	import enhance from 'svelte-captcha-enhance';

	export let form: ActionData;
	let name: string, email: string, message: string;
</script>

<svelte:head>
	<title>inforbi.de - Kontakt</title>
	<script
		src="https://www.google.com/recaptcha/api.js?render={import.meta.env.VITE_SITEKEY}"
	></script>
</svelte:head>

<SectionCard>
	<h1 class="text-2xl font-bold text-center mb-5">Kontakt</h1>
	{#if form?.error}
		<p class="bg-red-600 rounded-lg p-3 text-white w-fit mx-auto border-red-900 border-2">
			Leider gab es einen Fehler beim Absenden deiner Anfrage!
		</p>
	{/if}
	<form
		class="flex flex-col gap-5 text-left"
		method="post"
		use:enhance={{
			type: 'recaptcha',
			sitekey: import.meta.env.VITE_SITEKEY,
			submit:
				({ formData }) =>
				({ result }) => {}
		}}
	>
		<label class="block">
			<span class="text-gray-700">Voller Name*</span>
			<input
				type="text"
				class="mt-1 block w-full rounded-md
				border-gray-600 shadow-sm
				focus:border-slate-300 focus:ring focus:ring-slate-200 focus:ring-opacity-50"
				name="name"
				bind:value={name}
				placeholder=""
				required
			/>
		</label>
		<label class="block">
			<span class="text-gray-700">E-Mail-Adresse*</span>
			<input
				type="email"
				class="mt-1 block w-full rounded-md
				border-gray-600 shadow-sm
				focus:border-slate-300 focus:ring focus:ring-slate-200 focus:ring-opacity-50"
				name="email"
				bind:value={email}
				placeholder="john@example.com"
				required
			/>
		</label>
		<label class="block">
			<span class="text-gray-700">Ihre Nachricht*</span>
			<textarea
				class="mt-1 block w-full rounded-md
				border-gray-600 shadow-sm
				focus:border-slate-300 focus:ring focus:ring-slate-200 focus:ring-opacity-50"
				name="message"
				bind:value={message}
				maxlength="5000"
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
	<a href="/privacy" class="block underline mt-5">Hinweise zum Datenschutz</a>
</SectionCard>
