"use client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [expiryDate, setExpiryDate] = useState(null);

    const router = useRouter();

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        const stored_accessToken = localStorage.getItem("accessToken");
        const stored_expiryDate = localStorage.getItem("expiryDate");
        // if (!savedUser || !accessToken || !expiryDate) {
        //     router.push("/user/authentication")
        // }
        setUser(JSON.parse(savedUser));
        setAccessToken(stored_accessToken);
        setExpiryDate(stored_expiryDate);

        // if(stored_expiryDate < new Date()){
        //     logout()
        //     router.push("/user/authentication")
        // }

    }, []);

    const isAuthenticated = ()=>{
        const savedUser = localStorage.getItem("user");
        const stored_accessToken = localStorage.getItem("accessToken");
        const stored_expiryDate = localStorage.getItem("expiryDate");
        if (!savedUser || !accessToken || !expiryDate) {
            router.push("/user/authentication")
        }
        if(stored_expiryDate < new Date()){
            logout()
            router.push("/user/authentication")
        }
    }
    const login = (userData, token, expiry) => {
        setUser(userData);
        setAccessToken(token);
        setExpiryDate(expiry);
    
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("accessToken", token);
        localStorage.setItem("expiryDate", expiry);
      };

    const logout = () => {
        setUser(null);
        setAccessToken(null);
        setExpiryDate(null);
    
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("expiryDate");
        router.push("/user/authentication")
      };

    return (
        <UserContext.Provider value={{ user, setUser, accessToken, setAccessToken, expiryDate,isAuthenticated, setExpiryDate, login, logout}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    return useContext(UserContext);
};
