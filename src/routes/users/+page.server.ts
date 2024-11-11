import { db } from '$db/db';
import { usersTable } from '$db/schema/users';

export const load = async () => {
	return { users: await fetchData() };
};

const fetchData = async () => {
	return await db.select().from(usersTable);
};
