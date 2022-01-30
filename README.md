# Custom Geek Ecommerce

Proyecto Final del Curso de ReactJS de CoderHouse.

Venta de disfraces de la cultura geek (videojuegos, animes, peliculas/series) 


#Rutas

/ ----> HomeComponent
/category/:id ----> HomeComponent
/search ----> SearchComponent
/item/:id ----> ItemDetail

#Modelo Item

Disfraz {
id: string,
description: string,
price: number,
category: string,
stock: number,
pictureUrl: string
}

