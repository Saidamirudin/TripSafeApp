// firebase config

import { ReactNativeFirebase } from "@react-native-firebase/app";

// firebase web app configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMHyYzMTKOHSozYL_wBSUy5PLgX6s_YHY",
    authDomain: "mytripsafe.firebaseapp.com",
    projectId: "mytripsafe",
    storageBucket: "mytripsafe.appspot.com",
    messagingSenderId: "458419659654",
    appId: "1:458419659654:web:e222ac81f771c2461fc207",
    measurementId: "G-N53ZP15GFG"
};

if (!ReactNativeFirebase.apps.length){
    ReactNativeFirebase.initializeApp(firebaseConfig);
}

export {firebaseConfig};