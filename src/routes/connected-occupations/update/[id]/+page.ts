export async function load({ data, params, url }) {
	const { id } = params;
	const actualOccupationId = url.searchParams.get('actualOccupationId');
	const expectedOccupationId = url.searchParams.get('expectedOccupationId');
	return {
		...data,
		id,
		actualOccupationId,
		expectedOccupationId
	};
}
