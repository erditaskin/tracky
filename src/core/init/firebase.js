import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import firebaseConfig from "config/firebase"

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
