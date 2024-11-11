import { pgTable, serial, text, timestamp, foreignKey, integer } from 'drizzle-orm/pg-core';

export const expectedOccupations = pgTable('expected_occupations', {
	id: serial('id').primaryKey().notNull(),
	title: text('title').notNull(),
	createdAt: timestamp('created_at', { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp('updated_at', { mode: 'string' }).notNull()
});

export const joinOccupations = pgTable(
	'join_occupations',
	{
		id: serial('id').primaryKey().notNull(),
		expectedOccupationId: integer('expected_occupation_id').notNull(),
		actualOccupationId: integer('actual_occupation_id').notNull(),
		userId: integer('user_id'),
		createdAt: timestamp('created_at', { mode: 'string' }).defaultNow().notNull(),
		updatedAt: timestamp('updated_at', { mode: 'string' }).notNull()
	},
	(table) => {
		return {
			joinOccupationsExpectedOccupationIdExpectedOccupationsId: foreignKey({
				columns: [table.expectedOccupationId],
				foreignColumns: [expectedOccupations.id],
				name: 'join_occupations_expected_occupation_id_expected_occupations_id'
			}),
			joinOccupationsActualOccupationIdActualOccupationsIdFk: foreignKey({
				columns: [table.actualOccupationId],
				foreignColumns: [actualOccupations.id],
				name: 'join_occupations_actual_occupation_id_actual_occupations_id_fk'
			}),
			joinOccupationsUserIdUsersIdFk: foreignKey({
				columns: [table.userId],
				foreignColumns: [users.id],
				name: 'join_occupations_user_id_users_id_fk'
			})
		};
	}
);

export const actualOccupations = pgTable('actual_occupations', {
	id: serial('id').primaryKey().notNull(),
	title: text('title').notNull(),
	createdAt: timestamp('created_at', { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp('updated_at', { mode: 'string' }).notNull()
});

export const users = pgTable('users', {
	id: serial('id').primaryKey().notNull(),
	firstName: text('first_name').notNull(),
	lastName: text('last_name').notNull(),
	email: text('email'),
	createdAt: timestamp('created_at', { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp('updated_at', { mode: 'string' }).notNull()
});
