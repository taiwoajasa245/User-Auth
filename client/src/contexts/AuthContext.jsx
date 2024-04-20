import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null); 
    const [userData, setUserData] = useState(null); 
    const [isAuth, setIsAuth] = useState(false); 
    const storedData = JSON.parse(localStorage.getItem('user_data')); 


    useEffect( () => { 
        if (storedData) { 
            const {userToken, user} = storedData; 
            setToken(userToken); 
            setUserData(user); 
            setIsAuth(true);
        }
    }, []);

    const login = (newToken, newData) => { 
        localStorage.setItem(
            'user_data', 
            JSON.stringify({userToken: newToken, user: newData }), 
        ); 

        setToken(newToken); 
        setUserData(newData); 
        setIsAuth(true); 
    }

    const logout = () => { 
        localStorage.removeItem('user_data')
        setToken(null); 
        setUserData(null); 
        setIsAuth(false);
    }; 

    return ( 

<AuthContext.Provider value={{ token, isAuth, login, logout, userData }}> 
    {children}
</AuthContext.Provider>

    ); 

}

export const useAuth = () => useContext(AuthContext)