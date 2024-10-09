export async function load({ params, url }) {
	const { id } = params;
	const title = url.searchParams.get('title');
	return {
		id,
		title
	};
}
