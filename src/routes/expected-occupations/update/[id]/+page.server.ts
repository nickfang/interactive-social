import { getExpectedOccupationById } from '$db/queries/select.js';
import { updateExpectedOccupation } from '$db/queries/update.js';
import { error, redirect } from '@sveltejs/kit';

const fetchData = async (id: string) => {
	return await getExpectedOccupationById(parseInt(id, 10));
};

export const load = async ({ params }) => {
	const expectedOccupation = await fetchData(params.id);
	return {
		expectedOccupation
	};
};

export const actions = {
	updateExpectedOccupation: async ({ request }) => {
		try {
			const data = await request.formData();
			const occupation = { title: data.get('title') as string };
			const id = data.get('id') as string;

			await updateExpectedOccupation(Number(id), occupation);
		} catch (e) {
			error(500, e instanceof Error ? e.message : 'An unknown error occurred');
		}
		throw redirect(303, '/expected-occupations');
	}
};
