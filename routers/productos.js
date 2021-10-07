const express = require('express');

const Contenedor = require('../Contenedor');

const productosContenedor = new Contenedor('./data/productos.json');
const productosRouter = express.Router();

productosRouter.get('/', async (req, res) => {
  const lista = await productosContenedor.getAll();
  res.send({
    message: 'success',
    data: lista
  });
})

productosRouter.post('/', async (req, res) => {
  const nuevoProducto = req.body;

  const idProductoGuardado = await productosContenedor.save(nuevoProducto);

  res.send({
    message: 'Producto guardado',
    data: {
      ...nuevoProducto,
      id: idProductoGuardado
    }

  });
})

productosRouter.put('/:id', async (req, res) => {
  const productoId = req.params.id;
  const producto = req.body;
  const productoUpdated = await productosContenedor.update(productoId, producto);

  if (!userUpdated) {
    res.send({
      message: 'Actualización fallida.',
      data: productoUpdated
    });
  } else {
    res.send({
      message: 'Actualización realizada con éxito.',
      data: productoUpdated
    });
  }
});

productosRouter.delete('/:id', async (req, res) => {
  const productoId = req.params.id;
  const producto = req.body;
  const productoDelete = await productosContenedor.deleteById(productoId, producto);

  if (!userDelete) {
    res.send({
      message: 'No se pudo eliminar el producto.',
      data: productoDelete
    });
  } else {
    res.send({
      message: 'Producto eliminado con éxito.',
      data: productoDelete
    });
  }
});

module.exports = productosRouter;

console.log(__dirname);