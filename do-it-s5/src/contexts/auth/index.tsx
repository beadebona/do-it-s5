import { useCallback } from "react";
import { useState } from "react";
import { createContext, ReactNode, useContext } from "react";
import { API } from "../../services/api";

interface AuthProviderProps{
    children: ReactNode;
}

interface User{
    name: string;
    email: string;
    id: string;
}

interface AuthState {
    accessToken: string;
    user: User;
}

interface LoginCredentials {
    email: string;
    password: string;
}

interface AuthContextData{
    user: User;
    accessToken: string;
    LogIn:(credentials: LoginCredentials) => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({}as AuthContextData);

export const useAuth =()=>{
    const context = useContext(AuthContext);

    if(!context){
        throw new Error ("useAuth must be used within an AuthProvider")
    }
    return context;
}

export const AuthProvider =({children}: AuthProviderProps) =>{
    const [data, setData] = useState<AuthState>(()=>{
        const accessToken = localStorage.getItem("@Do-it.2: accessToken")
        const user = localStorage.getItem("@Do-it.2: user")

        if(accessToken && user){
            return {accessToken, user: JSON.parse(user)}
        }
        return {} as AuthState;
    });

    const LogIn = useCallback(async({email, password}: LoginCredentials)=>{
        const response = await API.post("login", {email, password})
        const { accessToken, user } = response.data;
        localStorage.setItem("@Do-it.2: accessToken", accessToken)
        localStorage.setItem("@Do-it.2: user", user)
        setData({accessToken, user})

    }, [])
    return <AuthContext.Provider value={{user: data.user, accessToken: data.accessToken , LogIn}}>{children}</AuthContext.Provider>
}