import { createExpectedOccupation } from '$db/queries/expectedOccupation';
import { redirect, error } from '@sveltejs/kit';

export const actions = {
	createExpectedOccupation: async ({ request }) => {
		const data = await request.formData();
		const occupation = {
			title: data.get('title') as string
		};
		try {
			await createExpectedOccupation(occupation);
		} catch (e) {
			error(500, e instanceof Error ? e.message : 'An unknown error occurred');
		}
		throw redirect(303, '/expected-occupations');
	}
};
