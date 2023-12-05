const express = require('express');
const app = express();
const port = 3000;
const OracleDBConnector = require('./db');

// Ruta raíz para verificar servicio
app.get('/', (req, res) => {
  res.send('NEVERSIN_GAMES_HEARTBEAT');
});

// Te devuelve las noticias
app.get('/news', (req, res) => {
    res.send('NEVERSIN_GAMES_NEWS');
  });

// Te logea
app.get('/login', (req, res) => {
  res.send('NEVERSIN_GAMES_NEWS');
});

async function Test_Db() {
  const dbConnector = new OracleDBConnector();
  // Conectar a la base de datos
  await dbConnector.connect();
  // Ejemplo de consulta
  const sql = 'SELECT 1 FROM DUAL';
  await dbConnector.query(sql);
}


// Inicia el servidor
app.listen(port, () => {
  console.log(`** WEB SERVICE STARTED ON http://localhost:${port} **`);
  Test_Db();
});
