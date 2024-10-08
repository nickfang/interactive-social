import { db } from '$db/db';
import { deleteActualOccupationById } from '$db/queries/delete';
import { actualOccupationTable } from '$db/schema';
import { error } from '@sveltejs/kit';

export const load = async () => {
	return { actualOccupations: await fetchData() };
};

const fetchData = async () => {
	return await db.select().from(actualOccupationTable);
};

export const actions = {
	deleteActualOccupation: async ({ request }) => {
		try {
			const data = await request.formData();
			const id = Number(data.get('id'));
			await deleteActualOccupationById(id);
		} catch (e) {
			console.log(e);
			return error(500, { message: 'Could not delete the actual occupation' });
		}
		return {
			success: true,
			message: 'Actual occupation deleted successfully!'
		};
	}
};
