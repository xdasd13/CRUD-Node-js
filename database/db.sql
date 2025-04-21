CREATE DATABASE peliculasnode;
use peliculasnode;

-- Crear la tabla
CREATE TABLE peliculas (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    director VARCHAR(100) NOT NULL,
    anio_estreno INT NOT NULL,
    genero VARCHAR(50) NOT NULL,
    duracion_min INT NOT NULL,
    calificacion_imdb DECIMAL(3,1) NOT NULL
);

-- Insertar datos
INSERT INTO peliculas (id, titulo, director, anio_estreno, genero, duracion_min, calificacion_imdb) VALUES
(1, 'El Padrino', 'Francis Ford Coppola', 1972, 'Crimen/Drama', 175, 9.2),
(2, 'Titanic', 'James Cameron', 1997, 'Romance/Drama', 195, 7.8),
(3, 'Inception', 'Christopher Nolan', 2010, 'Ciencia ficción', 148, 8.8),
(4, 'Parasite', 'Bong Joon-ho', 2019, 'Thriller', 132, 8.6),
(5, 'Toy Story', 'John Lasseter', 1995, 'Animación', 81, 8.3);

SELECT * FROM peliculas;
