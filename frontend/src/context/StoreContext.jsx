

{/*Using context to allow multiple compnents to access values without using props*/}
import { createContext } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {


    const contextValue = {
        // Add your context values here
        food_list
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export  default StoreContextProvider