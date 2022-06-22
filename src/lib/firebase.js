import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbZcZpdImMPTcMYRX-eyZ12RNK10lbs08",
  authDomain: "fir-sample-7b168.firebaseapp.com",
  projectId: "fir-sample-7b168",
  storageBucket: "fir-sample-7b168.appspot.com",
  messagingSenderId: "811206240316",
  appId: "1:811206240316:web:d43ab7fdeb90195302fb39"
};

firebase.initializeApp(firebaseConfig);