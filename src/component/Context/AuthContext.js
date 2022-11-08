import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/Firebase.config';
const auth = getAuth(app)
export const contextProvider = createContext()
const AuthContext = ({children}) => {
  const name = "alamin"
  const authInfo ={name}
  return (
    <contextProvider.Provider value={authInfo}>
      {children}
    </contextProvider.Provider>
  );
};

export default AuthContext;