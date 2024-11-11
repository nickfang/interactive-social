import { getActualOccupations } from '$db/queries/actualOccupation';
import { getExpectedOccupations } from '$db/queries/expectedOccupation';
import { updateConnectedOccupations } from '$db/queries/joinOccupation';
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
	updateConnectedOccupations: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id') as string;
		const occupations = {
			expectedOccupationId: Number(data.get('expectedOccupation')),
			actualOccupationId: Number(data.get('actualOccupation'))
		};
		try {
			await updateConnectedOccupations(Number(id), occupations);
		} catch (e) {
			error(500, e instanceof Error ? e.message : 'An unknown error occurred');
		}
		throw redirect(303, '/connected-occupations');
	}
};
