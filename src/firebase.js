/* eslint-disable */
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported as isAnalyticsSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Without env vars the SDK throws on init and the app never mounts, so boot without Firebase instead.
const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId
);

let firebaseApp = null;
let analytics = null;
let database = null;

if (isFirebaseConfigured) {
  firebaseApp = initializeApp(firebaseConfig);
  database = getFirestore(firebaseApp);
  if (firebaseConfig.measurementId) {
    isAnalyticsSupported()
      .then((supported) => {
        if (supported) analytics = getAnalytics(firebaseApp);
      })
      .catch(() => {});
  }
} else {
  console.warn(
    '[firebase] Missing VITE_FIREBASE_* variables. Copy .env.example to .env and fill them in. ' +
    'The app runs, but Firestore-backed content stays empty.'
  );
}

export { firebaseApp, analytics, database, isFirebaseConfigured };
