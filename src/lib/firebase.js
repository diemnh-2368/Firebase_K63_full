import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA-gLFrI7yDV59zTHgro7P6FPo63Xa3VV4",
  authDomain: "itss-trinhdat-20184065.firebaseapp.com",
  projectId: "itss-trinhdat-20184065",
  storageBucket: "itss-trinhdat-20184065.appspot.com",
  messagingSenderId: "860296152862",
  appId: "1:860296152862:web:489cfaccd3e2f254852b0f",
  measurementId: "G-D29M52EGG3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);