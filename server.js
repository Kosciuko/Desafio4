const express = require('express');

const productosRouter = require('./routers/productos');

const server = express();

const PORT = 8080;


server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/static', express.static('public'));

server.use('/api/productos', productosRouter);

server.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Error de status(500).');
});


server.listen(PORT, () => console.log(`Servidor abierto en el puerto N° > [ ${PORT} ]`));

server.on('error', (error) => console.log('Error: ', error));

console.log(__dirname);