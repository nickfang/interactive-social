import { redirect } from '@sveltejs/kit';
import { getValue } from '$store/auth';

export const load = async ({ url }) => {
	const isAuthenticated: boolean = getValue();
	console.log('layout.server, isAuthenticated', isAuthenticated);
	if (!isAuthenticated) {
		throw redirect(302, `/login?redirectTo=${encodeURIComponent(url.href)}`);
	}
	return { isAuthenticated };
};
