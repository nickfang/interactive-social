import { createUser } from '$db/queries/insert';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const user = {
			firstName: data.get('firstName') as string,
			lastName: data.get('lastName') as string,
			email: data.get('email') as string
		};
		try {
			await createUser(user);
			console.log('User created');
			return {
				status: 302,
				headers: {
					location: '/users'
				}
			};
		} catch (error) {
			return {
				status: 500,
				body: error instanceof Error ? error.message : 'An unknown error occurred'
			};
		}
	}
};
