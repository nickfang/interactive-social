import { createUser } from '$db/queries/user';
import type { InsertUser } from '$db/schema/users.js';
import { redirect, error } from '@sveltejs/kit';

export const actions = {
	createUser: async ({ request }) => {
		const data = await request.formData();
		const user: InsertUser = {
			firstName: data.get('firstName') as string,
			lastName: data.get('lastName') as string,
			id: data.get('id') ? Number(data.get('id')) : undefined,
			createdAt: data.get('createdAt') ? new Date(data.get('createdAt') as string) : undefined,
			updatedAt: data.get('updatedAt') ? new Date(data.get('updatedAt') as string) : undefined,
			email: data.get('email') as string | null
		};
		try {
			await createUser(user);
		} catch (e) {
			error(500, e instanceof Error ? e.message : 'An unknown error occurred');
		}
		throw redirect(303, '/users');
	}
};
