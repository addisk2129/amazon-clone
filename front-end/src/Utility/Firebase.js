import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDyyPdGdVQsH-o8MnKsAd6q_z9oTp5Pb4s",
  authDomain: "e-clone-d0a49.firebaseapp.com",
  projectId: "e-clone-d0a49",
  storageBucket: "e-clone-d0a49.firebasestorage.app",
  messagingSenderId: "552222802124",
  appId: "1:552222802124:web:f4d041500743ffee684269",
  measurementId: "G-KSTTE9VY76"
};
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Initialize Analytics only in browser environment
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Export services (for use in other files)
export { app, auth, db, storage, analytics };