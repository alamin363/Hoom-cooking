import React, { createContext } from 'react';

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