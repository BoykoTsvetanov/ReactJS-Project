import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firebase-firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAULaIS5s8pfdE8Zrz6RSapouGgxPR6CbM",
  authDomain: "js-react-c8744.firebaseapp.com",
  projectId: "js-react-c8744",
  storageBucket: "js-react-c8744.appspot.com",
  messagingSenderId: "255618987011",
  appId: "1:255618987011:web:372e9f34cf26d9c2c6ca36",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

export const auth = firebase.auth();
