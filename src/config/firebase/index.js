import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBpHMfJvOGKqyCS1i-4N1gmJXJAitZCsRs",
    authDomain: "animals-7e2c0.firebaseapp.com",
    projectId: "animals-7e2c0",
    storageBucket: "animals-7e2c0.appspot.com",
    messagingSenderId: "463684200816",
    appId: "1:463684200816:web:09111341e709f65cef87b5",
    measurementId: "G-409E6KNYVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);

export const auth= getAuth(app);
export default firebaseConfig;
