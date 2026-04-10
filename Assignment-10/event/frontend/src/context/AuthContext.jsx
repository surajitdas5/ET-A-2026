import { createContext, useContext, useEffect, useState } from "react";
import axiosClient from "../apiClient";

export const AuthContext = createContext();

export function AuthProvider({ children }){
    const [ user, setUser ] = useState(false)

    const login = (userData) => setUser(userData)
    const logout = () => setUser(false)

    async function getCurrentUser(){
        try {
            let res = await axiosClient.get("/users/current-user")
            let data = res.data
            setUser(data)
        } catch (error) {
            console.log(error.response);
            setUser(false)
        }
    }

    useEffect(()=>{
        getCurrentUser()
    }, [])

    return (
        <AuthContext.Provider value={{ user, login, logout  }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}