import { redirect } from '@sveltejs/kit';

let isAuthenticated = false;

export const load = async ({ url }) => {
	isAuthenticated = false;
	if (!isAuthenticated) {
		throw redirect(302, `/login?redirectTo=${encodeURIComponent(url.href)}`);
	}
	return { isAuthenticated };
};
