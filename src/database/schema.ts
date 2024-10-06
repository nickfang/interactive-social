import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
	id: serial('id').primaryKey(),
	firstName: text('first_name').unique(),
	lastName: text('last_name').unique(),
	email: text('email'),
	createdAt: timestamp('created_at').notNull().defaultNow()
});

export const expectedOccupationTable = pgTable('expected_occupations', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	createdAt: timestamp('created_at').notNull().defaultNow(),
	updatedAt: timestamp('updated_at')
		.notNull()
		.$onUpdate(() => new Date())
});

export const actualOccupationTable = pgTable('actual_occupations', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	createdAt: timestamp('created_at').notNull().defaultNow(),
	updatedAt: timestamp('updated_at')
		.notNull()
		.$onUpdate(() => new Date())
});

export const joinOccupationsTable = pgTable('join_occupations', {
	id: serial('id').primaryKey(),
	expectedOccupationId: integer('expected_occupation_id')
		.references(() => usersTable.id)
		.notNull(),
	actualOccupationId: integer('actual_occupation_id')
		.references(() => usersTable.id)
		.notNull(),
	userId: integer('user_id').references(() => usersTable.id),
	createdAt: timestamp('created_at').notNull().defaultNow()
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InsertExpectedOccupation = typeof expectedOccupationTable.$inferInsert;
export type SelectExpectedOccupation = typeof expectedOccupationTable.$inferSelect;

export type InsertActualOccupation = typeof actualOccupationTable.$inferInsert;
export type SelectActualOccupation = typeof actualOccupationTable.$inferSelect;

export type InsertJoinOccupation = typeof joinOccupationsTable.$inferInsert;
export type SelectJoinOccupation = typeof joinOccupationsTable.$inferSelect;
