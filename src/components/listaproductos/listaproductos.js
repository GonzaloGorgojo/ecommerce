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
    "precio": 1500
  }, {
    "id": 2,
    "nombre": "Gorra",
    "precio": 1200
  }, {
    "id": 3,
    "nombre": "Buzo",
    "precio": 2500
  }, {
    "id": 4,
    "nombre": "Cinto",
    "precio": 1000
  }, {
    "id": 5,
    "nombre": "Chomba",
    "precio": 3000
  }, {
    "id": 6,
    "nombre": "Campera",
    "precio": 7000
  }, {
    "id": 7,
    "nombre": "zapatillas",
    "precio": 6000
  }, {
    "id": 8,
    "nombre": "Reloj",
    "precio": 4500
  }, {
    "id": 9,
    "nombre": "Bermuda",
    "precio": 3800
  }]
 `