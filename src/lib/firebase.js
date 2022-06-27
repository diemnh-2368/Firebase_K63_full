import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBt0D-00-jGiCM65QMFe3H6QxpcOIYoJXY",
    authDomain: "fir-sample-9de46.firebaseapp.com",
    projectId: "fir-sample-9de46",
    storageBucket: "fir-sample-9de46.appspot.com",
    messagingSenderId: "686543355205",
    appId: "1:686543355205:web:98350aa255596c5011d22c"
  };

  firebase.initializeApp(firebaseConfig);