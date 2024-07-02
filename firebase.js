import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { getDatabase } from "firebase/database";
const firebaseConfig = {
 //apikey
};
  
 
   const app= firebase.initializeApp(firebaseConfig);

const database = getDatabase(app);
export { database, firebase, firebaseConfig };
