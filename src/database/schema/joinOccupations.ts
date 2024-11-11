import { integer, pgTable, serial, timestamp } from 'drizzle-orm/pg-core';
import { expectedOccupationTable } from './expectedOccupations';
import { actualOccupationTable } from './actualOccupations';
import { usersTable } from './users';

export const joinOccupationsTable = pgTable('join_occupations', {
	id: serial('id').primaryKey(),
	expectedOccupationId: integer('expected_occupation_id')
		.references(() => expectedOccupationTable.id)
		.notNull(),
	actualOccupationId: integer('actual_occupation_id')
		.references(() => actualOccupationTable.id)
		.notNull(),
	userId: integer('user_id').references(() => usersTable.id),
	createdAt: timestamp('created_at').notNull().defaultNow(),
	updatedAt: timestamp('updated_at')
		.notNull()
		.$onUpdate(() => new Date())
});

export type InsertJoinOccupation = typeof joinOccupationsTable.$inferInsert;
export type SelectJoinOccupation = typeof joinOccupationsTable.$inferSelect;
