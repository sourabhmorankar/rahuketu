/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} email
 * @property {string} [role]
 */
/** @type {User|null} */
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
		
		/**
		 * @param {User|null} user
		 */
		setUser: (user) => {
			currentUser = user;
		},
		
		/**
		 * @param {boolean} loading
		 */
		setLoading: (loading) => {
			isLoading = loading;
		},
		
		/**
		 * @param {null} error
		 */
		setError: (error) => {
			authError = null;
		},
		
		logout: () => {
			currentUser = null;
			authError = null;
		}
	};
}