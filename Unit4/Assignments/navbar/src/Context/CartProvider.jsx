import {react,createContext} from "react";

const CartContext = createContext();


export const CartProvider =()=>{
    return (<CartContext.Provider>
        <Navbar/>
        <Body/>

    </CartContext.Provider>)
}