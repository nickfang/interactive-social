import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const expectedOccupationTable = pgTable('expected_occupations', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	createdAt: timestamp('created_at').notNull().defaultNow(),
	updatedAt: timestamp('updated_at')
		.notNull()
		.$onUpdate(() => new Date())
});

export type InsertExpectedOccupation = typeof expectedOccupationTable.$inferInsert;
export type SelectExpectedOccupation = typeof expectedOccupationTable.$inferSelect;
