import { getValue } from '$lib/store/auth';

export const load = () => {
	return {
		isAuthenticated: getValue()
	};
};
