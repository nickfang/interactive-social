import { db } from '$db/db';
import { usersTable } from '$db/schema';

export const load = async () => {
	return { users: await fetchData() };
};

const fetchData = async () => {
	return await db.select().from(usersTable);
};
