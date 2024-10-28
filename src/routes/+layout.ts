import type { LayoutLoad } from './$types';

export const load = (async ({ data, url }) => {
	const path = url.pathname;
	return { ...data, path };
}) satisfies LayoutLoad;
