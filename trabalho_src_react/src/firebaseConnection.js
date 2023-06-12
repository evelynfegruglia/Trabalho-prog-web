// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_jHUwOLrf5jD1qisAHp8WtBDOEVvFGL8",
  authDomain: "trab-prog-web.firebaseapp.com",
  projectId: "trab-prog-web",
  storageBucket: "trab-prog-web.appspot.com",
  messagingSenderId: "542855224258",
  appId: "1:542855224258:web:8a7d13b9dafdf8e96b945b",
  measurementId: "G-4F0FC7LB55"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db }; 