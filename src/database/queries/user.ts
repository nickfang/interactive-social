import { eq } from 'drizzle-orm';
import { db } from '../db';
import { usersTable } from '../schema/users';
import type { InsertUser, SelectUser } from '../schema/users';

export async function createUser(data: InsertUser) {
	await db.insert(usersTable).values(data);
}

export async function getUserById(id: SelectUser['id']): Promise<
	Array<{
		id: number;
		firstName: string | null;
		lastName: string | null;
		email: string | null;
	}>
> {
	return db.selectDistinct().from(usersTable).where(eq(usersTable.id, id));
}

export async function deleteUserById(id: SelectUser['id']) {
	await db.delete(usersTable).where(eq(usersTable.id, id));
}
