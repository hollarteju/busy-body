import { createContext, useState, useEffect, useContext } from "react";

// Create the context
const UserContext = createContext();

// Create the custom hook `useUser` to access context
export function useUser() {
  return useContext(UserContext);
}

// UserProvider component to manage global state
const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState(0);
  const [order, setOrder] = useState("")
  const [userId, setUserId] = useState("")

  useEffect(() => {

    const token = localStorage.getItem("signaturecards")
    if(token){
    setIsLoggedIn(token);
     }
  }, []);

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    cart,
    setCart,
    order,
    userId
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
