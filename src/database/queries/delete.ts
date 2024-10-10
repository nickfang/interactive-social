import { db } from '../db';
import { eq, and } from 'drizzle-orm';
import type { SelectActualOccupation, SelectExpectedOccupation, SelectUser } from '../schema';
import {
	actualOccupationTable,
	expectedOccupationTable,
	joinOccupationsTable,
	usersTable
} from '../schema';

export async function deleteUserById(id: SelectUser['id']) {
	await db.delete(usersTable).where(eq(usersTable.id, id));
}

export async function deleteActualOccupationById(id: SelectActualOccupation['id']) {
	await db.delete(actualOccupationTable).where(eq(actualOccupationTable.id, id));
}

export async function deleteExpectedOccupationById(id: SelectExpectedOccupation['id']) {
	await db.delete(expectedOccupationTable).where(eq(expectedOccupationTable.id, id));
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
