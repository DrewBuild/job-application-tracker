/* =================================================
FIREBASE CONFIG
================================================= */

import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
apiKey: "AIzaSyCLP6JMO9XZ5BaplyeTFXjuE1mPaPClMzs",
authDomain: "careerflow-16af6.firebaseapp.com",
projectId: "careerflow-16af6",
storageBucket: "careerflow-16af6.firebasestorage.app",
messagingSenderId: "755240959164",
appId: "1:755240959164:web:90f198b09a34ae958924b9"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)