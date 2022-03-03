import React, { createContext, useContext, useState } from 'react';

//utils
import { addItem, increaseCart, removeItemInCart, countTotal } from '../../../utils/cart';

//toast
import { toast } from 'react-toastify';

const cartContext = createContext([])

export const useCartContext = () => {
    return useContext(cartContext)
}


const CartContextProvider = ({ children}) => {

    const [cartList, setCartList] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const addToCart = (item, quantity = 0) => {
        setCartList(addItem(cartList, item, quantity))
        setCartCount(increaseCart(cartList))
    }

    const removeItem = (item) => {
        setCartList(removeItemInCart(cartList, item, setCartCount, setTotalPrice))
        toast.success(`Producto ${item.title} eliminado de su carrito`, {
            position: toast.POSITION.BOTTOM_RIGHT,
            theme: 'colored',
            autoClose: 5000
        })
    }

    const cleanCart = () => {
        setCartCount(0)
        setCartList([])
        setTotalPrice(0)
        toast.success(`Todos los productos eliminados de su carrito`, {
            position: toast.POSITION.BOTTOM_RIGHT,
            theme: 'colored',
            autoClose: 5000
        })
    }

    const countTotalPrice = () => {
        setTotalPrice(countTotal(cartList))
    }

    return (
        <cartContext.Provider value={{
            cartList,
            addToCart,
            removeItem,
            cleanCart,
            countTotalPrice,
            totalPrice,
            cartCount
        }}>
            {children}
        </cartContext.Provider>
    );
}

export default CartContextProvider;
