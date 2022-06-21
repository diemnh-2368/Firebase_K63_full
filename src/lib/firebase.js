import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA9H8X4l6d4-fcd8jlwKFJWaoKQFuLOzCY",
  authDomain: "fir-sample-nth.firebaseapp.com",
  projectId: "fir-sample-nth",
  storageBucket: "fir-sample-nth.appspot.com",
  messagingSenderId: "122635131701",
  appId: "1:122635131701:web:2f757f33f1c3b6c4444a7c"
};

firebase.initializeApp(firebaseConfig);