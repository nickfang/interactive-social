import { getValue } from '$store/mockAuth';

export const load = () => {
	return {
		isAuthenticated: getValue()
	};
};
