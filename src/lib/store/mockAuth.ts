let loggedIn: boolean = false;

const getValue = (): boolean => loggedIn;

const setValue = (value: boolean): boolean => {
	loggedIn = value;
	return loggedIn;
};

export { getValue, setValue };

// import { writable } from 'svelte/store';
// export const loggedIn = writable(false);
