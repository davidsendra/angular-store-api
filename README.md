# API de AngularStore

API REST utilizada en [AngularStore](https://github.com/GastonPerez97/taller-web-2-proyecto).

## Tecnologías utilizadas:
- NodeJS.
- Express.
- MongoDB.
- Mongoose.

## Endpoints:
- Ver todos los productos ( GET ): https://angular-store-api.herokuapp.com/taller-web-2/api/products

- Ver producto por ID ( GET ): https://angular-store-api.herokuapp.com/taller-web-2/api/product/ [ID DEL PRODUCTO]
  * Ejemplo: https://angular-store-api.herokuapp.com/taller-web-2/api/product/60f1b3329eb312969c6f58e3
  
- Ver todas las categorías ( GET ): https://angular-store-api.herokuapp.com/taller-web-2/api/categories

- Ver productos por categoría ( GET ): https://angular-store-api.herokuapp.com/taller-web-2/api/products/ [NOMBRE DE CATEGORÍA]
  * Ejemplo: https://angular-store-api.herokuapp.com/taller-web-2/api/products/Monitores
  
- Agregar nuevo producto (disponible solo para administrador) ( POST ): https://angular-store-api.herokuapp.com/taller-web-2/api/product
