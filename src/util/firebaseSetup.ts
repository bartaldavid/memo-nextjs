// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFAbCEihv5QfQMay8se1diMjz4CTKLE7M",
  authDomain: "memo-app-23647.firebaseapp.com",
  projectId: "memo-app-23647",
  storageBucket: "memo-app-23647.appspot.com",
  messagingSenderId: "526554950841",
  appId: "1:526554950841:web:238bce9431a25cc7ceff68",
  measurementId: "G-STXRP2JH2Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { analytics, db };
