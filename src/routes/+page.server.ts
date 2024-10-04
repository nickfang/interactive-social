import { db } from '../database/db';
import { usersTable } from '../database/schema';

export const load = async () => {
	return { data: await fetchData() };
};

const fetchData = async () => {
	const users = await db.select().from(usersTable);
	console.log(users);
	return users;
};
