import { sendMail } from '$lib/mailer';
import { invalid, error, redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		if (!data) throw error(400, 'No data');

		const name = data.get('name')?.toString();
		const email = data.get('email')?.toString();
		const message = data.get('message')?.toString();

		if (!name || !email || !message) return invalid(400, { error: 'Missing data' });
		if (name === 'CrytoVaf') return invalid(400, { error: 'Invalid data' });

		await sendMail(email, `Kontaktanfrage von ${name}`, message);
		throw redirect(303, '/contact/success');
	}
};
