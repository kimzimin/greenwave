// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyButOEuf_hvbbQ5n_dFFurSoQNyDwIbxus",
  authDomain: "fir-auth-7921a.firebaseapp.com",
  projectId: "fir-auth-7921a",
  storageBucket: "fir-auth-7921a.appspot.com",
  messagingSenderId: "760297245723",
  appId: "1:760297245723:web:64b59ce0bf535623a9fcbe"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0 ){
    app=firebase.initializeApp(firebaseConfig);
}else{
    app=firebase.app()
}
const auth=firebase.auth()

export{auth};
