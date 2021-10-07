import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'; //v9

const firebaseConfig = {
  apiKey: "AIzaSyCE18eHWs87DuHHMsTeOpB0fNDt9pRrHrA",
  authDomain: "redux-react-structure.firebaseapp.com",
  projectId: "redux-react-structure",
  storageBucket: "redux-react-structure.appspot.com",
  messagingSenderId: "594962380628",
  appId: "1:594962380628:web:cb3c2766b7d9b7333ebac1"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export {db, googleProvider, firebase};