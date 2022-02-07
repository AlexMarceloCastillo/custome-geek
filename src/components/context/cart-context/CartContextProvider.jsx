import React, { createContext, useContext, useState } from 'react';

//utils
import { addItem, increaseCart, removeItemInCart } from '../../../utils/cart';


const cartContext = createContext([])

export const useCartContext = () => {
    return useContext(cartContext)
}


const CartContextProvider = ({ children}) => {

    const [cartList, setCartList] = useState([])
    const [cartCount, setCartCount] = useState(0)

    const addToCart = (item, quantity = 0) => {
        setCartList(addItem(cartList, item, quantity))
        setCartCount(increaseCart(cartList))
    }

    const removeItem = (item) => {
        setCartList(removeItemInCart(cartList, item, setCartCount))
    }

    const cleanCart = () => {
        setCartCount(0)
        setCartList([])
    }

    return (
        <cartContext.Provider value={{
            cartList,
            addToCart,
            removeItem,
            cartCount
        }}>
            {children}
        </cartContext.Provider>
    );
}

export default CartContextProvider;
