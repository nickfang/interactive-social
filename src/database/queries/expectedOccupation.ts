import { eq } from 'drizzle-orm';
import { db } from '../db';
import { expectedOccupationTable } from '../schema/expectedOccupations';
import type {
	InsertExpectedOccupation,
	SelectExpectedOccupation
} from '../schema/expectedOccupations';

export async function createExpectedOccupation(data: InsertExpectedOccupation) {
	await db.insert(expectedOccupationTable).values(data);
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

export async function updateExpectedOccupation(
	id: SelectExpectedOccupation['id'],
	data: Partial<Omit<SelectExpectedOccupation, 'id'>>
) {
	await db.update(expectedOccupationTable).set(data).where(eq(expectedOccupationTable.id, id));
}

export async function deleteExpectedOccupationById(id: SelectExpectedOccupation['id']) {
	await db.delete(expectedOccupationTable).where(eq(expectedOccupationTable.id, id));
}
