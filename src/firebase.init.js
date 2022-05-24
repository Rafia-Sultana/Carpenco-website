// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbBlrjSOzVZFBs-rla9IbU8DplgiOPftc",
    authDomain: "toolsmanufacturer-e9c11.firebaseapp.com",
    projectId: "toolsmanufacturer-e9c11",
    storageBucket: "toolsmanufacturer-e9c11.appspot.com",
    messagingSenderId: "368149596548",
    appId: "1:368149596548:web:f5d3273d58912e1fc875d1"
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;