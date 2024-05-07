import { sendMail } from '$lib/mailer';
import { error, redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		if (!data) error(400, 'No data');

		const name = data.get('name')?.toString();
		const email = data.get('email')?.toString();
		const message = data.get('message')?.toString();

		if (!name || !email || !message) return error(400, 'Missing data');
		if (name === 'CrytoVaf') return error(400, 'Invalid data');

		await sendMail(email, `Kontaktanfrage von ${name}`, message);
		redirect(303, '/contact/success');
	}
};
