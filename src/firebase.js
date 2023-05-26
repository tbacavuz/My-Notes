// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgWb1Q_k8517nZOKo7ssHwMAMvp3cu_4s",
  authDomain: "notes-app-9d203.firebaseapp.com",
  projectId: "notes-app-9d203",
  storageBucket: "notes-app-9d203.appspot.com",
  messagingSenderId: "564937321052",
  appId: "1:564937321052:web:63e1181093600032919499"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")