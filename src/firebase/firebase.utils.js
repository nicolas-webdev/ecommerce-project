import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

const config = {
  apiKey: "AIzaSyDJeTtLl_AUT7qCN7UI4TE6djc8TkZgEt4",
  authDomain: "crwn-db-3c251.firebaseapp.com",
  projectId: "crwn-db-3c251",
  storageBucket: "crwn-db-3c251.appspot.com",
  messagingSenderId: "695375298665",
  appId: "1:695375298665:web:0cbd09c731e8111946e2f8",
  measurementId: "G-HSKE8908YF",
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
