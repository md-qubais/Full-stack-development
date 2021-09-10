import React, { useState, useEffect } from "react";
import auth from "../firebase";
export const AuthContext = React.createContext();
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  let login = async (email, password) => {
    return await auth.signInWithEmailAndPassword(email, password);
  };
  let signout = async () => {
    return await auth.signOut();
  };
  let signup = async (email, password) => {
    return await auth.createUserWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user === undefined) setCurrentUser(null);
      else setCurrentUser(user);
      setLoading(false);
    });
  }, []); //componentdidmount

  const value = {
    currentUser,
    login,
    signout,
    signup,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
