const express = require('express');
const router = express.Router();
const conexion = require('./database/db');
const crud = require('./controllers/crud');

// Listar todas las peliculas
router.get('/', (req, res) => {
  conexion.query('SELECT * FROM peliculas', (error, results) => {
    if (error) throw error;
    res.render('index', { registros: results });
  });
});

// Formulario de creación
router.get('/create', (req, res) => {
  res.render('create');
});


// Guardar nueva pelicula
router.post('/save', crud.save);
// Editar, actualizar y borrar dependerá de tu controlador
router.get('/edit/:id', crud.edit);
router.post('/update/:id', crud.update);
router.get('/delete/:id', crud.delete);

module.exports = router;
