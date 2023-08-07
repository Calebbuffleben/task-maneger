import React, { createContext, useState, FC } from "react";

interface IAuthProvider {
    children: React.ReactNode
}

interface IAuthContext {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

const initialState = false;

const AuthContext = createContext<IAuthContext>({
    isLoggedIn: initialState,
    login: () => { 
        return ''
    },
    logout: () => {
        return ''
    },
});

const AuthProvider: FC<IAuthProvider> = ({ children }) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false);

    const login = () => {
        setIsLoggedIn(true)
    }

    const logout = () => {
        setIsLoggedIn(false)
    }

    return <AuthContext.Provider value={{isLoggedIn, login, logout}}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider as default }