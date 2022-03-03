# Custome Geek Ecommerce

Proyecto final del curso de React de CODERHOUSE

¿Que es Custome Geek?. Es una empresa dedicada a la venta de disfraces de la cultura geek ya sea de videojuegos, series/peliculas


#Rutas

[localhost:3000/] ----> HomeComponent

[localhost:3000/category/:id] ----> HomeComponent

[localhost:3000/garment/:id] ----> HomeComponent

[localhost:3000/search] ----> SearchComponent

[localhost:3000/item/:id] ----> ItemDetail

[localhost:3000/cart] ----> CartComponent



#Modelo Item

Disfraz {
id: string,
description: string,
price: number,
category: string,
stock: number,
pictureUrl: string,
garment: string,
}

--------------------------------------------------------------------

Para correr el proyecto localmente simplemente usar

### `npm start`
