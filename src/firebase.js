// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEjnhytLHSG_twAuSHohCfBSdj8zJqELo",
  authDomain: "practice-a00c6.firebaseapp.com",
  databaseURL: "https://practice-a00c6-default-rtdb.firebaseio.com/",
  projectId: "practice-a00c6",
  storageBucket: "practice-a00c6.appspot.com",
  messagingSenderId: "501076621649",
  appId: "1:501076621649:web:533987682570e2b339fb70",
  measurementId: "G-6LB5R1W27G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
// const analytics = getAnalytics(app);
export { app, db };
