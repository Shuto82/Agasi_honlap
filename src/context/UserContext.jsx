import React, { createContext, useEffect, useState } from "react";
import { auth } from "../utilities/firebaseApp";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [msg, setMsg] = useState(null);
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser.email == "shuto82@gmail.com") {
        setAdmin(true);
      }
    });
  }, []);

  const signInUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMsg(null);
      navigate("/");
    } catch (err) {
      setMsg("Hibás e-mail cím és/vagy jelszó");
    }
  };

  const logOutUser = async () => {
    await signOut(auth);
    setAdmin(false);
    navigate("/");
  };

  console.log(user)

  console.log(admin);
  
  return (
    <UserContext.Provider
      value={{ user, admin, logOutUser, signInUser, msg, setMsg }}
    >
      {children}
    </UserContext.Provider>
  );
};
