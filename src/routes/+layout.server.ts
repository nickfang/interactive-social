import { getValue } from '$lib/store/auth';

export const load = () => {
	return {
		authenticated: getValue()
	};
};
