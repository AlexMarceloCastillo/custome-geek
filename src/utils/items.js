//firebase
import { addDoc, collection, doc, documentId, getDoc, getDocs, getFirestore, limit, query, writeBatch, where } from 'firebase/firestore';

//DTO
const itemDTO = (item) => {
    return {
        id: item.id,
        title: item.title,
        price: item.price - (item.price * (item.discount / 100)),
        discount: item.discount,
        originalPrice: item.price,
        stock: item.stock,
        category: item.category,
        garment: item.garment,
        pictureUrl: item.pictureUrl,
        description: item.description
    }
}




//Firebase 

//Obtener un producto por id
const getOneProduct = async (id) => {
    try {
        const itemRef = doc(getFirestore(), 'productos', id)
        let response = await getDoc(itemRef)
        return itemDTO(response.data())
    } catch (error) {
        throw new Error(error)
    }
}

//Obtener todos los productos
const getAllProducts = async () => {
    try {
        const queryCollection = collection(getFirestore(), 'productos')
        let response = await getDocs(queryCollection)
        let products = response.docs.map(prod => (itemDTO(prod.data())))
        return products
    } catch (error) {
        throw new Error(error)
    }
}

//Obtener productos por categoria
const getProductsByCategory = async (category) => {
    try {
        const queryCollection = collection(getFirestore(), 'productos')
        const queryFilter = query(queryCollection, where('category', '==', category))
        let response = await getDocs(queryFilter)
        let products = response.docs.map(prod => (itemDTO(prod.data())))
        return products
    } catch (error) {
        throw new Error(error)
    }
}

//Obtener productos que podrian interesarle al usuario
const getsMaybeInteresProductos = async (itemid, category) => {
    try {
        const queryCollectionCategory = collection(getFirestore(), 'productos')
        const queryFilterCategory = query(queryCollectionCategory, where('category', '==', category),limit(6))
        let responseCategory = await getDocs(queryFilterCategory)
        let products = responseCategory.docs.map(prod => (itemDTO(prod.data())))
        let finalProducts = products.filter((item) => {
            return item.id !== itemid
        })
        return finalProducts
    } catch (error) {
        throw new Error(error)
    }
}

//Obtener productos por prenda
const getProductsByGarment = async (garment) => {
    try {
        let garmentCapitalize = garment.trim().toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase())
        const queryCollection = collection(getFirestore(), 'productos')
        const queryFilter = query(queryCollection, where('garment', '==', garmentCapitalize))
        let response = await getDocs(queryFilter)
        let products = response.docs.map(prod => (itemDTO(prod.data())))
        return products
    } catch (error) {
        throw new Error(error)
    }
}

//Obtener items por busqueda
const searchItems = async (search = '') => {
    try {
        let products = await getAllProducts()
        let productsFinded = products.filter(prod => {
            let searchExpr = new RegExp(search.toLowerCase().trim())
            return prod.title.toLowerCase().match(searchExpr) || prod.description.toLowerCase().match(searchExpr) || prod.price.toString().match(searchExpr)
        })
        let finalData = productsFinded.map(item => {
            return itemDTO(item)
        })
        return finalData
    } catch (error) {
        throw new Error(error)
    }
}
//Control stock
const controlStock = async (cart) => {
    const queryCollection = collection(getFirestore(), 'productos')

    let queryControlStock = query(queryCollection, 
        where(documentId(), 'in', cart.map(cartItem => cartItem.item.id)))
    let products = await getDocs(queryControlStock)
    products.docs.forEach(product => {
        if(product.data().stock - cart.find(cartItem => cartItem.item.id ===product.id).quantity < 0) {
            throw new Error(`Error al crear el orden, el producto ${product.title} no tiene stock`)
        }
    })
    return true

}

//Actualizar stock
const updateStock = async (cart) => {
    try {

        const queryCollection = collection(getFirestore(), 'productos')
        const queryUpdateStock = query(
            queryCollection,
            where(documentId(), 'in', cart.map(cartItem => cartItem.item.id)))
        const batch = writeBatch(getFirestore())


        let products = await getDocs(queryUpdateStock)
        products.docs.forEach(res => {
            batch.update(res.ref, {
                stock: res.data().stock - cart.find(cartItem => cartItem.item.id ===res.id).quantity
            })
        })

        await batch.commit()
    } catch (error) {
        throw new Error(error)
    }
}

//Crear orden
const createOrden = async (cart, price, buyer) => {
    try {
        await controlStock(cart)
        const itemsCart = cart.map((cartItem) => {
            return { id: cartItem.item.id, title: cartItem.item.title, price: cartItem.item.price * cartItem.quantity }
        })
        let newOrder = {
            buyer,
            date: new Date(),
            items: itemsCart,
            total: price
        }

        const ordersCollection = collection(getFirestore(), 'orders')
        let orderCreated = await addDoc(ordersCollection, newOrder)
        await updateStock(cart)
        return orderCreated;
    } catch (error) {
        throw new Error(error)
    }
}



export { searchItems, getOneProduct, getAllProducts, getProductsByCategory, getProductsByGarment, getsMaybeInteresProductos, createOrden }