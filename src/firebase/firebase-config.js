import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD0j2NRdVma-Vzxd51Oo8IqoeT1Irt7iQo",
    authDomain: "journal-app-react-2d1be.firebaseapp.com",
    projectId: "journal-app-react-2d1be",
    storageBucket: "journal-app-react-2d1be.appspot.com",
    messagingSenderId: "78905129322",
    appId: "1:78905129322:web:62ab889a3f17d0d2b70d13"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
