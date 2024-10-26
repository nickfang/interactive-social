import { redirect } from '@sveltejs/kit';
import { getValue } from '$lib/store/auth';

export const load = async ({ url }) => {
	const isAuthenticated: boolean = getValue();
	if (!isAuthenticated) {
		throw redirect(302, `/login?redirectTo=${encodeURIComponent(url.href)}`);
	}
	return { isAuthenticated };
};
