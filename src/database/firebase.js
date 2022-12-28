// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMHyYzMTKOHSozYL_wBSUy5PLgX6s_YHY",
    authDomain: "mytripsafe.firebaseapp.com",
    projectId: "mytripsafe",
    storageBucket: "mytripsafe.appspot.com",
    messagingSenderId: "458419659654",
    appId: "1:458419659654:web:e222ac81f771c2461fc207",
    measurementId: "G-N53ZP15GFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);