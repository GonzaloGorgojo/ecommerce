export default function traerProductos(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    });
}

const productos = `
[{
    "id": 1,
    "nombre": "Remera",
    "precio": 1500,
    "img": "../imgs/remera.jpg"
  }, {
    "id": 2,
    "nombre": "Gorra",
    "precio": 1200,
    "img": "../imgs/gorra.jpg"
  }, {
    "id": 3,
    "nombre": "Buzo",
    "precio": 2500,
    "img": "../imgs/buzo.jpeg"
  }, {
    "id": 4,
    "nombre": "Cinto",
    "precio": 1000,
    "img": "../imgs/cinto.jpg"
  }, {
    "id": 5,
    "nombre": "Chomba",
    "precio": 3000,
    "img": "../imgs/chomba.jpg"
  }, {
    "id": 6,
    "nombre": "Campera",
    "precio": 7000,
    "img": "../imgs/campera.jpeg"
  }, {
    "id": 7,
    "nombre": "Zapatilla",
    "precio": 6000,
    "img": "../imgs/zapatilla.jpg"
  }, {
    "id": 8,
    "nombre": "Reloj",
    "precio": 4500,
    "img": "../imgs/reloj.jpg"
  }, {
    "id": 9,
    "nombre": "Bermuda",
    "precio": 3800,
    "img": "../imgs/bermuda.jpg"
  }]
 `