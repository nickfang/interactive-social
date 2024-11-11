import { createActualOccupation } from '$db/queries/actualOccupation';
import { redirect, error } from '@sveltejs/kit';

export const actions = {
	createActualOccupation: async ({ request }) => {
		try {
			const data = await request.formData();
			const occupation = { title: data.get('title') as string };
			await createActualOccupation(occupation);
		} catch (e) {
			error(500, e instanceof Error ? e.message : 'An unknown error occurred');
		}
		throw redirect(303, '/actual-occupations');
	}
};
