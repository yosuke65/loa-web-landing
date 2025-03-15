import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  // apiKey: "AIzaSyD0aMqZ9fk5Bveg9lcYtvLgG6iU5ey1FWc",
  // authDomain: "ever-journal-dev.firebaseapp.com",
  // projectId: "ever-journal-dev",
  // storageBucket: "ever-journal-dev.firebasestorage.app",
  // messagingSenderId: "669692913786",
  // appId: "1:669692913786:web:89650fa4cef71a5c7573c3"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = firebaseApp ? getFirestore(firebaseApp) : null;

export { db, firebaseApp };
