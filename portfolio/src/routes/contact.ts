import type { RequestHandler } from './__types/contact';

type OutputType = { success: boolean; error: string | undefined };

export const post: RequestHandler<OutputType> = async ({ request, params }) => {
	console.log(params);
	const data = await request.formData();
	if (!data) return { status: 400, body: { success: false, error: 'No data' } };

	const name = data.get('name');
	const email = data.get('email');
	const message = data.get('message');

	if (!name || !email || !message)
		return { status: 400, body: { success: false, error: 'Missing data' } };

	console.log(name, email, message);
	return {
		body: {
			success: true,
			error: undefined
		}
	};
};
