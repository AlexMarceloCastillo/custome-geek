

//Añadir en el cart list
const addItem = (cartList, item, quantity = 0) => {
    let existsInCart = isInCart(cartList, item.id)
    if (existsInCart >= 0) {
        if (!quantity && cartList[existsInCart].quantity < item.stock) {
            cartList[existsInCart].quantity++
        }
        if (quantity) {
            cartList[existsInCart].quantity = quantity
        }
    } else {
        cartList.push({ item, quantity: quantity > 0 ? quantity : 1 })
    }
    return cartList
}

//Remover item del cart list
const removeItemInCart = (cartList, item, setCartCount) => {
    let auxArr = []
    auxArr = cartList.filter((cart) => {
        return cart.item.id !== item.id
    })
    setCartCount(increaseCart(auxArr))
    return auxArr
}

//Si existe en el cart list aumentar su cantidad
const isInCart = (cartList, id) => {
    let index = cartList.findIndex((cart) => {
        return cart.item.id === id;
    })
    return index;
}


//Contar items del carrito para aumentar su numero en el cart widget
const increaseCart = (cartList) => {
    let quantity = 0
    cartList.forEach((cart) => {
        quantity += cart.quantity
    })
    return quantity;
}

export { addItem, increaseCart, isInCart, removeItemInCart }