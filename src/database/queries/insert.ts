import { db } from '../db';
import type {
	InsertUser,
	InsertExpectedOccupation,
	InsertActualOccupation,
	InsertJoinOccupation
} from '../schema';
import {
	usersTable,
	expectedOccupationTable,
	actualOccupationTable,
	joinOccupationsTable
} from '../schema';

export async function createUser(data: InsertUser) {
	console.log('createUser', data);
	try {
		await db.insert(usersTable).values(data);
	} catch (error) {
		console.log('createUser::error', error);
		throw error;
	}
}

export async function createExpectedOccupation(data: InsertExpectedOccupation) {
	await db.insert(expectedOccupationTable).values(data);
}

export async function createActualOccupation(data: InsertActualOccupation) {
	await db.insert(actualOccupationTable).values(data);
}

export async function createPost(data: InsertJoinOccupation) {
	await db.insert(joinOccupationsTable).values(data);
}
