import { relations } from "drizzle-orm/relations";
import { expectedOccupations, joinOccupations, actualOccupations, users } from "./schema";

export const joinOccupationsRelations = relations(joinOccupations, ({one}) => ({
	expectedOccupation: one(expectedOccupations, {
		fields: [joinOccupations.expectedOccupationId],
		references: [expectedOccupations.id]
	}),
	actualOccupation: one(actualOccupations, {
		fields: [joinOccupations.actualOccupationId],
		references: [actualOccupations.id]
	}),
	user: one(users, {
		fields: [joinOccupations.userId],
		references: [users.id]
	}),
}));

export const expectedOccupationsRelations = relations(expectedOccupations, ({many}) => ({
	joinOccupations: many(joinOccupations),
}));

export const actualOccupationsRelations = relations(actualOccupations, ({many}) => ({
	joinOccupations: many(joinOccupations),
}));

export const usersRelations = relations(users, ({many}) => ({
	joinOccupations: many(joinOccupations),
}));