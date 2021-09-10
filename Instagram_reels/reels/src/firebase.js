import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";
let object = require("./secrets");
firebase.initializeApp(object);
let auth = firebase.auth();
export default auth;