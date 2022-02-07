const items = [
    {
        id: 1,
        title: "Spider-Man (Sam Raimi)",
        price: 10000,
        description: "Disfraz de la pelicula del 2002 del director Sam Raimi.",
        category: 'movie',
        stock:5,
        discount: 10,
        pictureUrl: "https://blogdesuperheroes.es/wp-content/plugins/BdSGallery/BdSGaleria/82218.jpg"
    },
    {
        id: 2,
        title: "Stormtrooper Star Wars GOLD",
        price: 20000,
        description: "Stormtrooper dorado de Star Wars",
        category: 'movie',
        stock: 15,
        discount: 0,
        pictureUrl: "https://m.media-amazon.com/images/I/61MqjlOJyeL._AC_SY606_.jpg"
    },
    {
        id: 3,
        title: "Bata Akatsuki",
        price: 5000,
        description: "Bata del Anime Naruto",
        category: 'anime',
        stock: 25,
        discount: 0,
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_825545-MLA47499540448_092021-F.webp"
    },
    {
        id: 4,
        title: "Armadura de poder de fallout",
        price: 15000,
        description: "Armadura videojuego fallout",
        category: 'videogame',
        stock: 40,
        discount:0,
        pictureUrl: "https://www.mythfactoryshop.com/38175-large_default/T-60-Camouflage-Power-Armor-ThreeZero-Fallout.jpg"
    },
    {
        id: 5,
        title: "Pennywise 2017 version",
        price: 12000,
        description: "Disfraz de la pelicula del 2017.",
        category: 'movie',
        stock: 55,
        discount: 25,
        pictureUrl: "https://i.mmo.cm/is/image/mmoimg/mw-product-max/pennywise-2017-deluxe-costume--mw-135581-1.jpg"
    },
    {
        id: 6,
        title: "Dinosaurio Naranja",
        description: "Disfraz completo de dinosaurio camuflado color naranja",
        price: 8000,
        stock: 79,
        discount: 21,
        category: 'others',
        pictureUrl: "https://ae01.alicdn.com/kf/H672220c12170440b9e3babb9053b3f73x/Adult-Inflatable-Dinosaur-Costume-T-REX-Cosplay-Party-Costume-Halloween-Costumes-for-Men-Women-Anime-Fancy.jpg_Q90.jpg_.webp"
    }
]
//DTO
const itemDTO = (item) => {
    return {
        id: item.id, 
        title: item.title, 
        price: item.price - (item.price * (item.discount/100)),
        discount: item.discount,
        originalPrice: item.price,
        stock: item.stock,
        category: item.category,
        pictureUrl: item.pictureUrl
    }
}

//Simular retardo de internet a la hora de obtener datos
const internetConnection = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(data)}, 2000)
    })
}

//Obtener todos los items
const getItems = () => {
    let finalData = items.map(item => {
        return itemDTO(item)
    })
    return internetConnection(finalData)
}

//Obtener item por id
const filterById = (id) => {
    let itemFinded = items.find((item) => {
        return item.id === id;
    })
    let finalItem = itemDTO(itemFinded)
    return internetConnection(finalItem)
}

//Obtener item por categoria
const filterByCat = (category) => {
    let itemsFinded = items.filter((item) => {
        return item.category === category
    })
    let finalData = itemsFinded.map(item => {
        return itemDTO(item)
    })
    return internetConnection(finalData)

}

//Obtener items por busqueda
const searchItems = (search ='') => {
    let itemsFinded = items.filter((item) => {
        let searchExpr = new RegExp(search.toLowerCase().trim())
        return item.title.toLowerCase().match(searchExpr) || item.description.toLowerCase().match(searchExpr) || item.price.toString().match(searchExpr)
    })
    let finalData = itemsFinded.map(item => {
        return itemDTO(item)
    })
    return internetConnection(finalData);
}



export { getItems, filterById, filterByCat, searchItems }