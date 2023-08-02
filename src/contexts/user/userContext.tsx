import { IUserInfo } from "@/interfaces/IUserInfo";
import React, { ReactNode, useState } from "react";
import { useContext } from "react";
import { createContext, FC } from "react"

const USER_NAME = 'userName';
const USER_EMAIL = 'userEmail';

const initialState: IUserInfo = {
    email: '',
    name: ''
}

const UserInfoContext = createContext({
    user: initialState
});

const UserInfoProvider: FC = ({ children }: ReactNode) => {
    const [user, setUser] = useState<IUserInfo>(initialState);

    const getUsers = () => {
        try {
            const userName: string = localStorage.getItem(USER_NAME);
            const userEmail: string = localStorage.getItem(USER_EMAIL);
            
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