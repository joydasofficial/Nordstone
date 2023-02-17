import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database' 

const firebaseConfig = {
  apiKey: "AIzaSyDj4950us6wuD3W2WcuC82KvJaI1e6MJVc",
  authDomain: "nordstone-task-fd4a6.firebaseapp.com",
  projectId: "nordstone-task-fd4a6",
  storageBucket: "nordstone-task-fd4a6.appspot.com",
  messagingSenderId: "672800375426",
  appId: "1:672800375426:web:372bee9a6785aa13bb6a9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const auth = getAuth(app)
export const db = getDatabase(app)