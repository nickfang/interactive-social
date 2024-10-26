import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const mockAuth = event.url.searchParams.get(' mockAuth');
	console.log('mockAuth', mockAuth);
	console.log(event.locals);
	// if (mockAuth === 'true') {
	// 	event.locals.isAuthenticated = true;
	// } else if (mockAuth === 'false') {
	// 	event.locals.isAuthenticated = false;
	// }
	const response = await resolve(event);
	console.log('hooks.server.ts', response);
	return response;
};
