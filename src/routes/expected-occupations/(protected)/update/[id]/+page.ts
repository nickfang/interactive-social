export async function load({ data, params }) {
	const id = params.id;
	// persist data from server
	return {
		...data,
		id
	};
}
