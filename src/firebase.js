/* eslint-disable */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:  'AIzaSyBO2GNsHoMw56p0RATY-vJ91dayEbg3HIE', //process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: 'lvivbag.firebaseapp.com', //process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: 'lvivbag', //process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: 'lvivbag.appspot.com', //process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: '686685728078',//process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: '1:686685728078:web:9191dca265af9a1a03821f',//process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: 'G-4XZ29R4GJF',//process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(firebaseApp);


export { firebaseApp, analytics, database };

