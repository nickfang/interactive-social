import { eq } from 'drizzle-orm';
import { db } from '../db';
import { actualOccupationTable } from '../schema/actualOccupations';
import type { InsertActualOccupation, SelectActualOccupation } from '../schema/actualOccupations';

export async function createActualOccupation(data: InsertActualOccupation) {
	await db.insert(actualOccupationTable).values(data);
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

export async function updateActualOccupation(
	id: SelectActualOccupation['id'],
	data: Partial<Omit<SelectActualOccupation, 'id'>>
) {
	await db.update(actualOccupationTable).set(data).where(eq(actualOccupationTable.id, id));
}

export async function deleteActualOccupationById(id: SelectActualOccupation['id']) {
	await db.delete(actualOccupationTable).where(eq(actualOccupationTable.id, id));
}
