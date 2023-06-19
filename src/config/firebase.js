
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBBcNPGk5wG-kE4k5RxG89lWTgOfr9tEEk",
  authDomain: "tiktok---jornada-19bbc.firebaseapp.com",
  projectId: "tiktok---jornada-19bbc",
  storageBucket: "tiktok---jornada-19bbc.appspot.com",
  messagingSenderId: "409261738929",
  appId: "1:409261738929:web:ad86be82e988f0b2308b90"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;