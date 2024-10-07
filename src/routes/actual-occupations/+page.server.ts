import { db } from '$db/db';
import { actualOccupationTable } from '$db/schema';

export const load = async () => {
	return { actualOccupations: await fetchData() };
};

const fetchData = async () => {
	return await db.select().from(actualOccupationTable);
};
