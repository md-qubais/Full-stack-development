import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import 'firebase/compat/firestore'
let object=require("./secrets")
firebase.initializeApp(object)
let auth=firebase.auth()
export default auth