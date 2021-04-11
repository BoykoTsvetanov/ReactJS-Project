import firebase from "firebase/app";

import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDO2D-W46ZfQJNe2X4yd6xyGPT7C8XP4nE",
  authDomain: "js-web-reactjs.firebaseapp.com",
  projectId: "js-web-reactjs",
  storageBucket: "js-web-reactjs.appspot.com",
  messagingSenderId: "440301645300",
  appId: "1:440301645300:web:b48ed64e5c35c6122d9da1",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const isAuth = firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("Logged In");
  } else {
    console.log("Logged out");
  }
});

export default firebase;

export const auth = firebase.auth();
