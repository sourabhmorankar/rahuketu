export interface User {
	readonly uid: string;
	readonly email: string;
	readonly displayName?: string;
	readonly photoURL?: string;
	readonly role: 'admin' | 'user';
	readonly createdAt: Date;
	readonly lastLogin: Date;
}

export interface AuthState {
	user: User | null;
	isAuthenticated: boolean;
	isLoading: boolean;
	error: string | null;
}

export interface LoginCredentials {
	readonly email: string;
	readonly password: string;
	readonly rememberMe?: boolean;
}

export interface AuthSession {
	readonly uid: string;
	readonly token: string;
	readonly expiresAt: Date;
	readonly refreshToken: string;
}