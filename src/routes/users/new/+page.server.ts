import { createUser } from '$db/queries/insert';
import { redirect, error } from '@sveltejs/kit';

export const actions = {
	createUser: async ({ request }) => {
		const data = await request.formData();
		const user = Object.fromEntries(data);
		try {
			await createUser(user);
		} catch (e) {
			error(500, e instanceof Error ? e.message : 'An unknown error occurred');
		}
		throw redirect(303, '/users');
	}
};
