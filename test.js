const Contenedor = require('./Contenedor');

const contedor = new Contenedor('./data/productos.json');

contedor.save({
  articulo: 'Microfibra',
  color: 'Rosa',
  precio: '230.00',
  imagen: 'https://http2.mlstatic.com/D_NQ_NP_854362-MLA31016482939_062019-O.jpg'
});