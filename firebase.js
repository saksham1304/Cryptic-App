import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCzKIsyBFIX8lmfkd6Kj0oxLvVi6zJ2HfE",
  authDomain: "cryptic-app-5d048.firebaseapp.com",
  projectId: "cryptic-app-5d048",
  storageBucket: "cryptic-app-5d048.appspot.com",
  messagingSenderId: "409564670255",
  appId: "1:409564670255:web:5746983bfa703c1ff999da",
  measurementId: "G-FM1VEZY8B9"
};
  
 
   const app= firebase.initializeApp(firebaseConfig);

const database = getDatabase(app);
export { database, firebase, firebaseConfig };
