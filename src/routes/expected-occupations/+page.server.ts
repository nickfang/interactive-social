import { db } from '$db/db';
import { deleteExpectedOccupationById } from '$db/queries/delete';
import { expectedOccupationTable } from '$db/schema';
import { error } from '@sveltejs/kit';

export const load = async () => {
	return { expectedOccupations: await fetchData() };
};

const fetchData = async () => {
	return await db.select().from(expectedOccupationTable);
};

export const actions = {
	deleteExpectedOccupation: async ({ request }) => {
		try {
			const data = await request.formData();
			const id = Number(data.get('id'));
			await deleteExpectedOccupationById(id);
		} catch (e) {
			console.log(e);
			return error(500, { message: 'Could not delete the expected occupation' });
		}
		return {
			success: true,
			message: 'Expected occupation deleted successfully!'
		};
	}
};
