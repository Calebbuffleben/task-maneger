import React, { ReactNode, useState } from "react";
import { useContext } from "react";
import { createContext, FC } from "react"

const initialState: IUserInfo = {
    email: '',
    name: ''
}

const UserInfoContext = createContext({
    user: initialState
});

const UserInfoProvider: FC = ({ children }: ReactNode) => {
    const [user, setUser] = useState<IUserInfo>(initialState);

    return <UserInfoContext.Provider value={{user}}>{children}</UserInfoContext.Provider>
}

const useUserInfo = () => {
    return useContext(UserInfoContext)
}

export { useUserInfo, UserInfoProvider as default }