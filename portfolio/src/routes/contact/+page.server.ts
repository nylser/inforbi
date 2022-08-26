import { sendMail } from '$lib/mailer';
import { error } from '@sveltejs/kit';
import type { Action } from './$types';

export const POST: Action = async ({ request }) => {
	const data = await request.formData();
	if (!data) throw error(400, 'No data');

	const name = data.get('name')?.toString();
	const email = data.get('email')?.toString();
	const message = data.get('message')?.toString();

	if (!name || !email || !message) throw error(400, 'Missing data');

	await sendMail(email, `Kontaktanfrage von ${name}`, message);
	return {
		location: '/contact/success'
	};
};
