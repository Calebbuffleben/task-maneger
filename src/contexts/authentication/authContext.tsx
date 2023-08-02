import React, { createContext, useState } from "react";

const initialState = false;

const AuthContext = createContext({
    isLoggedIn: initialState
});

const AuthProvider = ({ children }) => {
    const [ isLoggedIn,setIsLoggedIn ] = useState();
}