import { initializeApp} from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyC9FJ0MHtbl6aG4NcgjYWm5QPb3UfmXaIk",
  authDomain: "shopandcart-96cd9.firebaseapp.com",
  projectId: "shopandcart-96cd9",
  storageBucket: "shopandcart-96cd9.appspot.com",
  messagingSenderId: "413877304645",
  appId: "1:413877304645:web:fcf61c0cb69807636a922c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
