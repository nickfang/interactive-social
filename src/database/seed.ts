import { createExpectedOccupation } from './queries/insert';

const expectedOccupations = [
	'President',
	'Engineer',
	'Lawyer',
	'Doctor',
	'Pharmacist',
	'Nurse',
	'Programmer'
];

if (!('DATABASE_URL' in process.env)) {
	throw new Error('DATABASE_URL is not defined in the environment variables');
}

const seedOccupations = async () => {
	console.log('Start Seeding');
	for (const occupation of expectedOccupations) {
		await createExpectedOccupation({
			title: occupation
		});
	}
	console.log('Finished Seeding');
};

seedOccupations();
