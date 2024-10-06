import { createUser } from '$db/queries/insert';
import { redirect } from '@sveltejs/kit';

export const actions = {
	createUser: async ({ request }) => {
		const data = await request.formData();
		const user = Object.fromEntries(data);
		console.log('user', user);
		try {
			await createUser(user);
			console.log('User created');
		} catch (error) {
			return {
				status: 500,
				body: error instanceof Error ? error.message : 'An unknown error occurred'
			};
		}
		throw redirect(303, '/users');
	}
};
