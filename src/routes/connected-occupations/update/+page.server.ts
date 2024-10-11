import { updateActualOccupation } from '$db/queries/update';
import { redirect, error } from '@sveltejs/kit';

export const actions = {
	updateActualOccupation: async ({ request }) => {
		try {
			const data = await request.formData();
			const occupation = { title: data.get('title') as string };
			const id = data.get('id') as string;

			await updateActualOccupation(Number(id), occupation);
		} catch (e) {
			error(500, e instanceof Error ? e.message : 'An unknown error occurred');
		}
		throw redirect(303, '/actual-occupations');
	}
};
