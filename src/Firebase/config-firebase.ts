import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeanZc2sSw4YGFU6VOi5cTLBLM1TCTI_o",
  authDomain: "moviesapp-8a26f.firebaseapp.com",
  projectId: "moviesapp-8a26f",
  storageBucket: "moviesapp-8a26f.firebasestorage.app",
  messagingSenderId: "38859234927",
  appId: "1:38859234927:web:44f716562a171bdfc9379a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
