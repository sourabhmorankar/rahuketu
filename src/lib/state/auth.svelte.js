let currentUser = $state(null);
let isAuthenticated = $state(false);
let isLoading = $state(false);
let authError = $state(null);

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
		
		setUser: (user) => {
			currentUser = user;
		},
		
		setLoading: (loading) => {
			isLoading = loading;
		},
		
		setError: (error) => {
			authError = error;
		},
		
		logout: () => {
			currentUser = null;
			authError = null;
		}
	};
}