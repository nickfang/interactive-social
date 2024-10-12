import { eq } from 'drizzle-orm';
import { db } from '../db';
import type { SelectExpectedOccupation, SelectActualOccupation } from '../schema';
import { expectedOccupationTable, actualOccupationTable, joinOccupationsTable } from '../schema';

export async function updateExpectedOccupation(
	id: SelectExpectedOccupation['id'],
	data: Partial<Omit<SelectExpectedOccupation, 'id'>>
) {
	await db.update(expectedOccupationTable).set(data).where(eq(expectedOccupationTable.id, id));
}

export async function updateActualOccupation(
	id: SelectActualOccupation['id'],
	data: Partial<Omit<SelectActualOccupation, 'id'>>
) {
	await db.update(actualOccupationTable).set(data).where(eq(actualOccupationTable.id, id));
}

export async function updateConnectedOccupations(
	id: number,
	data: { expectedOccupationId: number; actualOccupationId: number }
) {
	await db.update(joinOccupationsTable).set(data).where(eq(joinOccupationsTable.id, id));
}
