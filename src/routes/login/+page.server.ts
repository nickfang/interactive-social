import type { PageServerLoad } from './$types';
import { getValue, setValue } from '$lib/store/auth';

export const load = (async () => {
	return { isAuthenticated: getValue() };
}) satisfies PageServerLoad;

export const actions = {
	toggleAuth: async () => {
		const currentValue = getValue();
		setValue(!currentValue);
		return { success: true };
	}
};
