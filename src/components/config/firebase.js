import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCa4z15L10OWOCwaIxA8lbhrw4Rm7zoyXU",
  authDomain: "ilan-database-7240f.firebaseapp.com",
  projectId: "ilan-database-7240f",
  storageBucket: "ilan-database-7240f.appspot.com",
  messagingSenderId: "607554329433",
  appId: "1:607554329433:web:ecf93965035afe7dd50a48",
  measurementId: "G-NK8YDE3C2Q"
};


const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app);
//db.settings({timestampIn :true})





