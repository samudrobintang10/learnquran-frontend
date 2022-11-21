// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxNirzHCUNaw68ahXwn9aQj_LZGo_brQc",
  authDomain: "belajarquran.firebaseapp.com",
  projectId: "belajarquran",
  storageBucket: "belajarquran.appspot.com",
  messagingSenderId: "365522424050",
  appId: "1:365522424050:web:94963302a14b366a2f806b",
  measurementId: "G-3SRSZ7KLWT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
