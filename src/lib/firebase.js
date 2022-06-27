import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCcxiouZpal5IxqN8DRFBV3dHmkTYqiDfw",
  authDomain: "fir-example-912c7.firebaseapp.com",
  projectId: "fir-example-912c7",
  storageBucket: "fir-example-912c7.appspot.com",
  messagingSenderId: "226538223016",
  appId: "1:226538223016:web:4715e21b01e0af167bd99d"
};

firebase.initializeApp(firebaseConfig);