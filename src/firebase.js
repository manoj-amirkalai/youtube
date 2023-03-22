// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBghcsgHXVcTjD7adaYea0yfZ1Qa8FYwVo",
  authDomain: "yt-clone-289d9.firebaseapp.com",
  projectId: "yt-clone-289d9",
  storageBucket: "yt-clone-289d9.appspot.com",
  messagingSenderId: "467239829732",
  appId: "1:467239829732:web:a7a4502953bd8684962cf1",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const timestamp = serverTimestamp();

export { app, db, auth, timestamp, provider };
