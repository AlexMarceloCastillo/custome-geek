const items = [
    {
        id: 1,
        title: "Remera de hombre cobra kai",
        price: 2500,
        description: "Remera con estampado cobra kai color negro",
        category: 'movie',
        stock:5,
        discount: 10,
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_867066-MLA45331368641_032021-O.webp"
    },
    {
        id: 2,
        title: "Remera mars attacks!",
        price: 3500,
        description: "Remera con estampado de la pelicula mars attacks(1996)!",
        category: 'movie',
        stock: 4,
        discount: 15,
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_628369-MLA48125749549_112021-O.webp"
    },
    {
        id: 3,
        title: "Remera Akatsuki color negro",
        price: 2000,
        description: "Remera del anime Naruto con estampado de la nube roja akatsuki de fondo negro",
        category: 'anime',
        stock: 6,
        discount: 0,
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_823653-MLA48843869206_012022-O.webp"
    },
    {
        id: 4,
        title: "Pijama spiderman",
        price: 2400,
        description: "Pijama del superheroe spiderman color azul",
        category: 'movie',
        stock: 3,
        discount:0,
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_795056-MLA48291643397_112021-O.webp"
    },
    {
        id: 5,
        title: "Mascara Scorpion MKX",
        price: 1800,
        description: "Mascara con impresion 3D de Scorpion del videojuego mortal kombat 10",
        category: 'videogame',
        stock: 6,
        discount: 25,
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_888524-MLA42234928794_062020-O.webp"
    },
    {
        id: 6,
        title: "Casco The Mandalorian",
        description: "Hasbro Star Wars Black Series - The Mandalorian Casco 1/1",
        price: 50000,
        stock: 5,
        discount: 20,
        category: 'movie',
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_860446-MLA48830448859_012022-O.webp"
    },
    {
        id: 7,
        title: "Remera De Hombre Los Pollos Hermanos",
        description: "Remera de la serie Breaking Bad",
        price: 2500,
        stock: 9,
        discount: 0,
        category: 'serie',
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_795115-MLA25137919487_102016-O.webp"
    },
    {
        id: 8,
        title: "Remera Attack on Titan Titan#3",
        description: "Remera blanca con estampado del anime snk titan numero 3",
        price: 1500,
        stock: 9,
        discount: 0,
        category: 'anime',
        pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_844314-MLA42115400189_062020-O.webp"
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
        pictureUrl: item.pictureUrl,
        description: item.description
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