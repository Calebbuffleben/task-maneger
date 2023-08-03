import { IUserInfo } from "@/interfaces/IUserInfo";
import React, { useState, useContext, createContext, FC } from "react";
import { useEffect } from "react";

const USER_NAME = 'userName';
const USER_EMAIL = 'userEmail';

const initialState: IUserInfo = {
    email: '',
    name: ''
}

const UserInfoContext = createContext({
    user: initialState
});

interface IUserInfoProvider {
    children: React.ReactNode;
  }

const UserInfoProvider: FC<IUserInfoProvider> = ({ children }) => {
    const [user, setUser] = useState<IUserInfo>(initialState);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        try {
            const userName: string = localStorage.getItem(USER_NAME) || '';
            const userEmail: string = localStorage.getItem(USER_EMAIL) || '';
            
            setUser({ email: userEmail, name: userName })
        } catch (error) {
            console.error(error);
        }
    }

    return <UserInfoContext.Provider value={{user}}>{children}</UserInfoContext.Provider>
}

const useUserInfo = () => {
    return useContext(UserInfoContext)
}

export { useUserInfo, UserInfoProvider as default }