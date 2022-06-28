import { initializeApp } from "firebase/app";
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore/lite";
import { getDatabase } from 'firebase/database'
const firebaseConfig = {
    apiKey: "AIzaSyDMCORltiR4ZfwnllO_BmE_86eD65Hwr0c",
    authDomain: "fir-sample-ec7dc.firebaseapp.com",
    projectId: "fir-sample-ec7dc",
    storageBucket: "fir-sample-ec7dc.appspot.com",
    messagingSenderId: "451999005017",
    appId: "1:451999005017:web:b716a132bc5fe882443448"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

async function getTodoItems() {
    const todoCol = collection(db, 'todos')
    const todoSnapshot = await getDocs(todoCol)
    const todoList = todoSnapshot.docs.map(doc => ({ ...doc.data(), key: doc.id }))
    return todoList
}
export { getTodoItems}