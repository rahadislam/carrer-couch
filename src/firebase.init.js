// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf_TbcN3qkjQY1ta5z4IrCxhxfXPp5jxw",
  authDomain: "career-coach-project-f2e49.firebaseapp.com",
  projectId: "career-coach-project-f2e49",
  storageBucket: "career-coach-project-f2e49.appspot.com",
  messagingSenderId: "1014027635114",
  appId: "1:1014027635114:web:95a4c5c899db54da3983d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;