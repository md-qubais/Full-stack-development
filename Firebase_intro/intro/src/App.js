import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import auth from "./Firebase";
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoader] = useState(false);
  const [user, setUser] = useState(null);
  const [Error, setError] = useState(false);
  const [mainLoader, setMainLoader] = useState(true);
  let handleSubmit = async () => {
    try {
      setLoader(true);
      let resp = await auth.signInWithEmailAndPassword(email, password);
      setUser(resp.user);
      setLoader(false);
    } catch (err) {
      setError(true);
    }
  };
  let handleLogOut = async () => {
    try {
      setLoader(true);
      let resp = await auth.signOut();
      setLoader(false);
      setEmail("")
      setPassword("")
    } catch (err) {

    }
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setMainLoader(false);
    });
  }); //combination of componentdidmount and componentdidupdate
  //executes when the state gets changed evertime and first time reactjs
  //components gets rendered
  //auth.onAuthStateChanged takes a call back function
  //in which there is one argument passed that is the respnonse of the
  //signin authentication that gives us not to sign in more than one time
  //if already signed in
  return (
    <>
      {mainLoader == true ? (
        <h1>wait for a second...</h1>
      ) : Error === true ? (
        <h1>failed to login...</h1>
      ) : loading === false ? (
        user != null ? (
          <>
          <h1>User logged in {user.uid}
          </h1>
          <button onClick={handleLogOut}> logout</button>
          </>
        ) : (
          <>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <button onClick={handleSubmit}>Submit</button>
          </>
        )
      ) : (
        <h1>loading...</h1>
      )}
    </>
  );
}

export default App;
