import firebase from "firebase/app"
import "firebase/auth"
export const auth=firebase.initializeApp({
    apiKey: "AIzaSyBKtioewS0_127sVwuBGweo_aVpvsqtDkY",
    authDomain: "chats-18122.firebaseapp.com",
    projectId: "chats-18122",
    storageBucket: "chats-18122.appspot.com",
    messagingSenderId: "666617032228",
    appId: "1:666617032228:web:c19d8c67080a18cde732b1",
    measurementId: "G-17Q8875J56"
  }).auth();