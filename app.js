const express = require('express');
const path = require('path');
const app = express();

// Rutas
const router = require('./router');

// Motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para cuerpo de peticiones
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Enrutador principal
app.use('/', router);

// Arranca el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
