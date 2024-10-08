import { eq, asc, between, count, getTableColumns, sql } from 'drizzle-orm';
import { db } from '../db';
import type { SelectUser } from '../schema';
import { actualOccupationTable, expectedOccupationTable, usersTable } from '../schema';

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

export async function getActualOccupations(): Promise<
	Array<{ id: number; title: string; createdAt: Date; updatedAt: Date }>
> {
	return db.select().from(actualOccupationTable);
}

export async function getActualOccupationById(
	id: number
): Promise<{ id: number; createdAt: Date; title: string; updatedAt: Date }> {
	return db
		.select()
		.from(actualOccupationTable)
		.where(eq(actualOccupationTable.id, id))
		.then((result) => result[0]);
}

export async function getExpectedOccupations(): Promise<
	Array<{ id: number; title: string; createdAt: Date; updatedAt: Date }>
> {
	return db.select().from(expectedOccupationTable);
}

export async function getExpectedOccupationById(
	id: number
): Promise<{ id: number; title: string; createdAt: Date; updatedAt: Date }> {
	return db
		.select()
		.from(expectedOccupationTable)
		.where(eq(expectedOccupationTable.id, id))
		.then((result) => result[0]);
}

// export async function getUsersWithPostsCount(
//   page = 1,
//   pageSize = 5,
// ): Promise<
//   Array<{
//     postsCount: number;
//     id: number;
//     name: string;
//     age: number;
//     email: string;
//   }>
// > {
//   return db
//     .select({
//       ...getTableColumns(usersTable),
//       postsCount: count(postsTable.id),
//     })
//     .from(usersTable)
//     .leftJoin(postsTable, eq(usersTable.id, postsTable.userId))
//     .groupBy(usersTable.id)
//     .orderBy(asc(usersTable.id))
//     .limit(pageSize)
//     .offset((page - 1) * pageSize);
// }

// export async function getPostsForLast24Hours(
//   page = 1,
//   pageSize = 5,
// ): Promise<
//   Array<{
//     id: number;
//     title: string;
//   }>
// > {
//   return db
//     .select({
//       id: postsTable.id,
//       title: postsTable.title,
//     })
//     .from(postsTable)
//     .where(between(postsTable.createdAt, sql`now() - interval '1 day'`, sql`now()`))
//     .orderBy(asc(postsTable.title), asc(postsTable.id))
//     .limit(pageSize)
//     .offset((page - 1) * pageSize);
// }
