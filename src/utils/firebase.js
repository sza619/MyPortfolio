import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARttl6EjON8-pAh_hbolO2GEM5ouTZkTA",
  authDomain: "project-leads-786.firebaseapp.com",
  projectId: "project-leads-786",
  storageBucket: "project-leads-786.firebasestorage.app",
  messagingSenderId: "486019673640",
  appId: "1:486019673640:web:1fff03aca312e4296ecf1d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const saveContactMessage = async ({ name, email, message }) => {
  return addDoc(collection(db, "contactMessages"), {
    name,
    email,
    message,
    source: "portfolio",
    createdAt: serverTimestamp(),
  });
};
