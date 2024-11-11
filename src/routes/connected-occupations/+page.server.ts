import { deleteConnectedOccupationById, getConnectedOccupations } from '$db/queries/joinOccupation';
import { error } from '@sveltejs/kit';

export const load = async () => {
	return fetchData();
};

const fetchData = async () => {
	return await getConnectedOccupations();
};

export const actions = {
	deleteConnectedOccupation: async ({ request }) => {
		const data = await request.formData();
		const id = Number(data.get('id'));
		try {
			await deleteConnectedOccupationById(id);
		} catch (e) {
			console.log('Error:', e);
			return error(500, { message: 'Could not delete the connected occupation' });
		}
	}
};
