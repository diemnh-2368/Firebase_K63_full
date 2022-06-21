import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = { 
  apiKey : "AIzaSyA8kR1ERodpCy2gHNpgNBs_w16xxxAGMgo" , 
  authDomain : "itss-ca188.firebaseapp.com" , 
  projectId : "itss-ca188" , 
  storageBucket : "itss-ca188.appspot.com" , 
  messagingSenderId : "601899044809" , 
  appId : "1:601899044809:web:9c9ae939634510d398a218" 
};

// Initialize Firebase
const app = initializeApp ( firebaseConfig );