import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAKjQAEMWqgzpfLUjMedK_846dxDgEgdN0",
  authDomain: "fir-k63-trinhtiendat.firebaseapp.com",
  projectId: "fir-k63-trinhtiendat",
  storageBucket: "fir-k63-trinhtiendat.appspot.com",
  messagingSenderId: "364551147633",
  appId: "1:364551147633:web:6819b4f3705708f0e5cbd0",
  measurementId: "G-FFRC78MKFJ"
};

firebase.initializeApp(firebaseConfig);