const conexion = require('../database/db');

// Guardar nueva película
exports.save = (req, res) => {
  const { titulo, director, anio_estreno, genero, duracion_min, calificacion_imdb } = req.body;
  conexion.query(
    'INSERT INTO peliculas SET ?',
    { titulo, director, anio_estreno, genero, duracion_min, calificacion_imdb },
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error al guardar la película');
      }
      res.redirect('/');
    }
  );
};

// Mostrar formulario de edición con datos cargados
exports.edit = (req, res) => {
  const id = req.params.id;
  conexion.query(
    'SELECT * FROM peliculas WHERE id = ?',
    [id],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error al buscar la película');
      }
      if (results.length === 0) {
        return res.status(404).send('Película no encontrada');
      }
      res.render('edit', { pelicula: results[0] });
    }
  );
};

// Procesar actualización de película
exports.update = (req, res) => {
  const id = req.params.id;
  const { titulo, director, anio_estreno, genero, duracion_min, calificacion_imdb } = req.body;
  conexion.query(
    `UPDATE peliculas 
       SET titulo = ?, director = ?, anio_estreno = ?, genero = ?, duracion_min = ?, calificacion_imdb = ?
     WHERE id = ?`,
    [titulo, director, anio_estreno, genero, duracion_min, calificacion_imdb, id],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error actualizando la película');
      }
      res.redirect('/');
    }
  );
};

// Eliminar una película
exports.delete = (req, res) => {
  const id = req.params.id;
  conexion.query(
    'DELETE FROM peliculas WHERE id = ?',
    [id],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error eliminando la película');
      }
      res.redirect('/');
    }
  );
};
