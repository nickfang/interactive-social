import { createConnectedOccupations } from '$db/queries/insert';
import { getActualOccupations, getExpectedOccupations } from '$db/queries/select.js';
import { redirect, error } from '@sveltejs/kit';

const fetchData = async () => {
	const actualOccupations = await getActualOccupations();
	const expectedOccupations = await getExpectedOccupations();
	const actualOccupationOptions = actualOccupations.map(({ id, title }) => ({
		value: id,
		label: title
	}));
	const expectedOccupationOptions = expectedOccupations.map(({ id, title }) => ({
		value: id,
		label: title
	}));
	return { actualOccupationOptions, expectedOccupationOptions };
};

export const load = async () => {
	return await fetchData();
};

export const actions = {
	createConnectedOccupations: async ({ request }) => {
		const data = await request.formData();
		const occupation = {
			expectedOccupationId: Number(data.get('expectedOccupation')),
			actualOccupationId: Number(data.get('actualOccupation'))
		};
		console.log(occupation);
		try {
			await createConnectedOccupations(occupation);
		} catch (e) {
			error(500, e instanceof Error ? e.message : 'An unknown error occurred');
		}
		throw redirect(303, '/connected-occupations');
	}
};
