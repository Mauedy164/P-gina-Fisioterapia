import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-9IDTLWs9pbVJ-uEGNIKCqV55j2sG8tU",
  authDomain: "react-pagina-marcelo.firebaseapp.com",
  projectId: "react-pagina-marcelo",
  storageBucket: "react-pagina-marcelo.appspot.com",
  messagingSenderId: "857573718587",
  appId: "1:857573718587:web:abc1f1ee0768881ac0ba1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, serverTimestamp, collection, getDocs };