

{/*Using context to allow multiple compnents to access values without using props*/}
import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {


    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) =>{
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 })); // If the itemId is not in the cart then it will be added and its value will be 1
        }
        else{
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1})); // If the itemId already exist in the cart ten its value will be increased by 1
        }
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1})) // The itemId value will be decreased by 1
    }

    useEffect(()=>{
        console.log(cartItems)
    },[cartItems])

    const contextValue = {
        // Add your context values here
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export  default StoreContextProvider 