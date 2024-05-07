import { sendMail } from '$lib/mailer';
import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		if (!data) error(400, 'No data');

		const recaptcha_response = data.get('g-recaptcha-response')?.toString();

		if (!recaptcha_response) return error(400, 'Missing recaptcha response');

		const recaptcha = await fetch('https://www.google.com/recaptcha/api/siteverify', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: `secret=${process.env.RECAPTCHA_SECRET}&response=${recaptcha_response}`
		}).then((res) => res.json());

		if (!recaptcha.success || recaptcha.score < 0.5) return fail(400, { error: 'Error' });

		const name = data.get('name')?.toString();
		const email = data.get('email')?.toString();
		const message = data.get('message')?.toString();

		if (!name || !email || !message) return fail(400, { error: 'Missing data' });

		await sendMail(email, `Kontaktanfrage von ${name}`, message);
		redirect(303, '/contact/success');

		return {
			success: true
		};
	}
};
