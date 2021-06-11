import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyCpKKWb3XtYQHSYVFRX92nKNuEj1NlwH5Y",
    authDomain: "chatroom-40034.firebaseapp.com",
    projectId: "chatroom-40034",
    storageBucket: "chatroom-40034.appspot.com",
    messagingSenderId: "996621815486",
    appId: "1:996621815486:web:19c9d68f3e2b614058d8ef"
  }).auth();