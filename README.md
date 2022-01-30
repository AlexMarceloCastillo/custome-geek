# Custom Geek Ecommerce

Proyecto Final del Curso de ReactJS de CoderHouse.

Venta de disfraces de la cultura geek (videojuegos, animes, peliculas/series) 


#Rutas

[localhost:3000/] ----> HomeComponent

[localhost:3000/category/:id] ----> HomeComponent

[localhost:3000/search] ----> SearchComponent

[localhost:3000/item/:id] ----> ItemDetail

#Modelo Item

Disfraz {
id: string,
description: string,
price: number,
category: string,
stock: number,
pictureUrl: string
}

