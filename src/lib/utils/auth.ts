import { getValue } from '$store/mockAuth';

export const checkAuthentication = async (): Promise<{
	isAuthenticated: boolean;
	error?: Error;
}> => {
	try {
		const isAuthenticated: boolean = getValue();
		if (!isAuthenticated) {
			return { isAuthenticated: false, error: new Error('Not authenticated') };
		}
		return { isAuthenticated };
	} catch (error) {
		console.error('Error checking authentication:', error);
		return { isAuthenticated: false, error: error as Error };
	}
};
