import { db } from '$db/db';
import { joinOccupationsTable } from '$db/schema';

export const load = async () => {
	return { connectedOccupations: await fetchData() };
};

const fetchData = async () => {
	return await db.select().from(joinOccupationsTable);
};
