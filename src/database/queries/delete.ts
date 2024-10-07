import { db } from '../db';
import { eq } from 'drizzle-orm';
import type { SelectUser } from '../schema';
import { usersTable } from '../schema';

export async function deleteUserById(id: SelectUser['id']) {
	await db.delete(usersTable).where(eq(usersTable.id, id));
}
