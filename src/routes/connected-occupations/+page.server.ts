import { getConnectedOccupations, getInvalidConnectedOccupations } from '$db/queries/select';

export const load = async () => {
	return fetchData();
};

const fetchData = async () => {
	return {
		valid: await getConnectedOccupations(),
		invalid: await getInvalidConnectedOccupations()
	};
};
