import { eq, or, isNull } from 'drizzle-orm';
import { db } from '../db';
import type { SelectUser } from '../schema';
import {
	actualOccupationTable,
	expectedOccupationTable,
	joinOccupationsTable,
	usersTable
} from '../schema';

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

export const getConnectedOccupations = async () => {
	const connectedOccupations = await db
		.select()
		.from(joinOccupationsTable)
		.innerJoin(
			expectedOccupationTable,
			eq(joinOccupationsTable.expectedOccupationId, expectedOccupationTable.id)
		)
		.innerJoin(
			actualOccupationTable,
			eq(joinOccupationsTable.actualOccupationId, actualOccupationTable.id)
		);
	return {
		connectedOccupations: connectedOccupations.map((connectedOccupation) => ({
			id: connectedOccupation.join_occupations.id,
			userId: connectedOccupation.join_occupations.userId,
			actualOccupationId: connectedOccupation.join_occupations.actualOccupationId,
			expectedOccupationId: connectedOccupation.join_occupations.expectedOccupationId,
			actualOccupation: connectedOccupation.actual_occupations,
			expectedOccupation: connectedOccupation.expected_occupations,
			createdAt: connectedOccupation.join_occupations.createdAt,
			updatedAt: connectedOccupation.join_occupations.updatedAt
		}))
	};
};

// It is possible for a foreign key to point to a deleted record.
// This query will return all records where the foreign key is invalid.
export const getInvalidConnectedOccupations = async () => {
	return await db
		.select()
		.from(joinOccupationsTable)
		.leftJoin(
			expectedOccupationTable,
			eq(joinOccupationsTable.expectedOccupationId, expectedOccupationTable.id)
		)
		.leftJoin(
			actualOccupationTable,
			eq(joinOccupationsTable.actualOccupationId, actualOccupationTable.id)
		)
		.where(
			or(
				isNull(expectedOccupationTable), // Check for null in the joined table
				isNull(actualOccupationTable) // Check for null in the joined table
			)
		);
};
