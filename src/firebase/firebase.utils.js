import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

//晒して大丈夫
const config = {
  apiKey: "AIzaSyDJeTtLl_AUT7qCN7UI4TE6djc8TkZgEt4",
  authDomain: "crwn-db-3c251.firebaseapp.com",
  projectId: "crwn-db-3c251",
  storageBucket: "crwn-db-3c251.appspot.com",
  messagingSenderId: "695375298665",
  appId: "1:695375298665:web:0cbd09c731e8111946e2f8",
  measurementId: "G-HSKE8908YF",
};

// Init Firebase
firebase.initializeApp(config);
firebase.analytics();

//ログイン
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("ユーザー作成に失敗しました", error.message);
    }
  }
  return userRef;
};

export default firebase;
