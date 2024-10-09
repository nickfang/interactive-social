export async function load({ params, url }) {
	return {
		id: params.id,
		title: url.searchParams.get('title')
	};
}
