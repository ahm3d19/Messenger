import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1g3fNVfCi5_AL9ppGlTJTqvb4GyPWq58",
  authDomain: "messenger-rn-3903e.firebaseapp.com",
  projectId: "messenger-rn-3903e",
  storageBucket: "messenger-rn-3903e.appspot.com",
  messagingSenderId: "839807385126",
  appId: "1:839807385126:web:d065d270d180f8c7b330e7"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)