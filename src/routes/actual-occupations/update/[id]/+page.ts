import actualOccupationUpdateTitle from '../../+page.svelte';

export async function load({ params }) {
	return {
		id: params.id,
		actualOccupationUpdateTitle
	};
}
