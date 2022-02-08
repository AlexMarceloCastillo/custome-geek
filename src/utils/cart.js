

//Añadir en el cart list
const addItem = (cartList, item, quantity) => {
    let index = isInCart(cartList, item.id)
    if (index >= 0) {
        //Existe en el carrito sin haberle seteado la cantidad (desde home)
        if (!quantity && cartList[index].quantity < item.stock) {
            cartList[index].quantity++
        }
        if (quantity && cartList[index].quantity + quantity > cartList[index].item.stock) {
            throw new Error(`No puedes añadir esa cantidad al carrito — tenemos ${item.stock} existencias y tienes ${cartList[index].quantity} actualmente en tu carrito.`)
        }else {
            cartList[index].quantity = cartList[index].quantity + quantity
        }

    } else {
        //No existe en el carrito agregar un producto nuevo 
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

//Devuelve el index si es que existe el item
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