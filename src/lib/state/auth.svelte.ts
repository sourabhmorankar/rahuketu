import type { User } from '$lib/types/auth';

let currentUser: User | null = $state(null);
let isAuthenticated = $state(false);
let isLoading = $state(false);
let authError: string | null = $state(null);

const authState = $derived(() => ({
	user: currentUser,
	isAuthenticated,
	isLoading,
	error: authError
}));

$effect(() => {
	isAuthenticated = currentUser !== null && currentUser.role === 'admin';
});

export function useAuth() {
	return {
		get state() { return authState; },
		get user() { return currentUser; },
		get isAuthenticated() { return isAuthenticated; },
		get isLoading() { return isLoading; },
		get error() { return authError; },
		
		setUser: (user: User | null) => {
			currentUser = user;
		},
		
		setLoading: (loading: boolean) => {
			isLoading = loading;
		},
		
		setError: (error: string | null) => {
			authError = error;
		},
		
		logout: () => {
			currentUser = null;
			authError = null;
		}
	};
}