import { checkAuthentication } from '$utils/auth';
import { redirect } from '@sveltejs/kit';

export const load = async ({ url }) => {
	const { isAuthenticated, error } = await checkAuthentication();
	if (!isAuthenticated || error) {
		throw redirect(302, `/login?redirectTo=${encodeURIComponent(url.href)}`);
	}
	return { isAuthenticated };
};
