import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
const auth = getAuth(app);
export const contextProvider = createContext();
const AuthContext = ({ children }) => {
 
  const [user, seTUser] = useState({})
  const [loader, setLoader] = useState(true)
  const provider = new GoogleAuthProvider();
  const RegisterWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logInWithEmailAndPassword = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(()=>{
    const unsebscribr = onAuthStateChanged(auth, currentUser => {
     const user = currentUser?.uid;
     seTUser(currentUser)
     setLoader(false)

     return () =>{
      unsebscribr()
     }
    })
  },[])
  const LogOut = () => {
    return signOut(auth);
  };
  const LoginWithGoogle = () =>{
    return signInWithPopup(auth, provider)
  }

  const name = "alamin";
  const authInfo = {
    name,
    RegisterWithEmailAndPassword,
    logInWithEmailAndPassword,
    LogOut,
    user,
    LoginWithGoogle,
    loader
  };
  return (
    <contextProvider.Provider value={authInfo}>
      {children}
    </contextProvider.Provider>
  );
};

export default AuthContext;
