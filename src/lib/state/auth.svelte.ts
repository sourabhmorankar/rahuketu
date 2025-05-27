interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  isAdmin: boolean;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

let authState = $state<AuthState>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null
});

interface AuthAPI {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  signOut: () => void;
}

export function useAuth(): AuthAPI {
  return {
    get user() { return authState.user; },
    get isAuthenticated() { return authState.isAuthenticated; },
    get isLoading() { return authState.isLoading; },
    get error() { return authState.error; },
    
    setUser: (user: User | null) => {
      authState.user = user;
      authState.isAuthenticated = !!user;
      authState.error = null;
    },
    
    setLoading: (loading: boolean) => {
      authState.isLoading = loading;
    },
    
    setError: (error: string | null) => {
      authState.error = error;
    },
    
    signOut: () => {
      authState.user = null;
      authState.isAuthenticated = false;
      authState.error = null;
    }
  };
}
