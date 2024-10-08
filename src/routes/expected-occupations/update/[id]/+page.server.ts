import { getExpectedOccupationById } from '$db/queries/select.js';

export const load = async ({ params }) => {
	const expectedOccupation = await fetchData(params.id);
	return {
		expectedOccupation
	};
};

const fetchData = async (id: string) => {
	return await getExpectedOccupationById(parseInt(id, 10));
};
