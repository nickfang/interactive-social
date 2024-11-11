import { eq, or, isNull, and } from 'drizzle-orm';
import { db } from '../db';
import { joinOccupationsTable } from '../schema/joinOccupations';
import { expectedOccupationTable } from '../schema/expectedOccupations';
import { actualOccupationTable } from '../schema/actualOccupations';
import type { InsertJoinOccupation, SelectJoinOccupation } from '../schema/joinOccupations';
import type { SelectExpectedOccupation } from '../schema/expectedOccupations';
import type { SelectActualOccupation } from '../schema/actualOccupations';

export async function createConnectedOccupations(data: InsertJoinOccupation) {
	await db.insert(joinOccupationsTable).values(data);
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

export async function updateConnectedOccupations(
	id: number,
	data: { expectedOccupationId: number; actualOccupationId: number }
) {
	await db.update(joinOccupationsTable).set(data).where(eq(joinOccupationsTable.id, id));
}

export async function deleteConnectedOccupationById(id: SelectJoinOccupation['id']) {
	await db.delete(joinOccupationsTable).where(eq(joinOccupationsTable.id, id));
}

export async function deleteConnectedOccupationByIds(
	actualOccupationId: SelectActualOccupation['id'],
	expectedOccupationId: SelectExpectedOccupation['id']
) {
	await db
		.delete(joinOccupationsTable)
		.where(
			and(
				eq(joinOccupationsTable.actualOccupationId, actualOccupationId),
				eq(joinOccupationsTable.expectedOccupationId, expectedOccupationId)
			)
		);
}
