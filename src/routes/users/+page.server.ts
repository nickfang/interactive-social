import { db } from '$db/db';
import { usersTable } from '$db/schema';

export const load = async () => {
	return { users: await fetchData() };
};

const fetchData = async () => {
	const users = await db.select().from(usersTable);
	console.log(users);
	return users;
};
