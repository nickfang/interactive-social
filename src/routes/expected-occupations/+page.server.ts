import { db } from '$db/db';
import { expectedOccupationTable } from '$db/schema';

export const load = async () => {
	return { expectedOccupations: await fetchData() };
};

const fetchData = async () => {
	return await db.select().from(expectedOccupationTable);
};
