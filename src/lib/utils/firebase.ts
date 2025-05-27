import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, type AppCheck } from 'firebase/app-check';
import { dev } from '$app/environment';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage, connectStorageEmulator } from 'firebase/storage';
import { initializeApp, getApps, getApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);

let appCheck: AppCheck;
if (typeof window !== 'undefined') {
	// Pass your reCAPTCHA Enterprise site key here. For more info: https://firebase.google.com/docs/app-check/web/recaptcha-enterprise-provider
	appCheck = initializeAppCheck(app, {
		provider: new ReCaptchaEnterpriseProvider(import.meta.env.VITE_RECAPTCHA_SITE_KEY),
		isTokenAutoRefreshEnabled: dev
	});
}

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