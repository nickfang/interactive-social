import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const actualOccupationTable = pgTable('actual_occupations', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	createdAt: timestamp('created_at').notNull().defaultNow(),
	updatedAt: timestamp('updated_at')
		.notNull()
		.$onUpdate(() => new Date())
});

export type InsertActualOccupation = typeof actualOccupationTable.$inferInsert;
export type SelectActualOccupation = typeof actualOccupationTable.$inferSelect;
