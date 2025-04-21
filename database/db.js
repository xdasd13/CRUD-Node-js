const mysql = require('mysql');
const conexion = mysql.createConnection({
  host: 'localhost',
  user:'root',
  password: '',
  database: 'peliculasnode'
});

conexion.connect((error) =>{
  if(error){
    console.error(`Error en la conexion: ${error}`);
    return;
  }

  console.log(`Conectado correctamente al servidor`)
});

module.exports = conexion;