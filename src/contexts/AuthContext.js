import React, { createContext, useEffect, useState } from 'react';
import fb from '../config/fbConfig';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = fb.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  useEffect(() => {
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
