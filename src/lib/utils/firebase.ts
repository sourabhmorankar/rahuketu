import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage, connectStorageEmulator } from 'firebase/storage';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { getAppCheck, initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check';
import { dev } from '$app/environment';

const firebaseConfig = {
	apiKey: "your-api-key",
	authDomain: "rahuketu-blog.firebaseapp.com",
	projectId: "rahuketu-blog",
	storageBucket: "rahuketu-blog.appspot.com",
	messagingSenderId: "123456789",
	appId: "your-app-id"
};

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);

if (dev && typeof window !== 'undefined') {
	try {
		connectAuthEmulator(auth, 'http://127.0.0.1:9099');
		connectFirestoreEmulator(db, '127.0.0.1', 8080);
		connectStorageEmulator(storage, '127.0.0.1', 9199);
		connectFunctionsEmulator(functions, '127.0.0.1', 5001);
	} catch (error) {
		console.log('Emulators already connected or not available');
	}
}

if (typeof window !== 'undefined' && !dev) {
	try {
		initializeAppCheck(app, {
			provider: new ReCaptchaEnterpriseProvider('your-recaptcha-key'),
			isTokenAutoRefreshEnabled: true
		});
	} catch (error) {
		console.error('App Check initialization failed:', error);
	}
}