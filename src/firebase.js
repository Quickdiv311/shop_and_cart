import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAvs7c0vJatCLu73ekE_QaB4h9IIk4haV4",
  authDomain: "shopncart-ab3bc.firebaseapp.com",
  projectId: "shopncart-ab3bc",
  storageBucket: "shopncart-ab3bc.appspot.com",
  messagingSenderId: "815983388304",
  appId: "1:815983388304:web:5e7a3dc76fb7a19b181a15"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {

//    signInWithPopup(auth,provider)
//    .then((result) => {
//     console.log(result);
//    })
//    .catch((error) => {
//     console.log(error);
//    })
// }