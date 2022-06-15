// Import the functions you need from the SDKs you need
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
//const auth=firebase.auth()
const auth=firebase.auth()
const db=getFirestore();
export{auth, db};
