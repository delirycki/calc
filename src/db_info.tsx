
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDRnCFJ8H9fLFpp6rIg61of5_hOuv9jav4",
  authDomain: "calc-3a62a.firebaseapp.com",
  projectId: "calc-3a62a",
  storageBucket: "calc-3a62a.appspot.com",
  messagingSenderId: "224613312352",
  appId: "1:224613312352:web:4bcaf7dcddb8cf813c2005"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);