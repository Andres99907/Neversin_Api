const express = require('express');
const app = express();
const port = 3000;

// Ruta raíz para verificar servicio
app.get('/', (req, res) => {
  res.send('NEVERSIN_GAMES_HEARTBEAT');
});

// Ruta raíz para verificar servicio
app.get('/news', (req, res) => {
    res.send('NEVERSIN_GAMES_NEWS');
  });

// Inicia el servidor
app.listen(port, () => {
  console.log(`WEB SERVICE STARTED ON http://localhost:${port}`);
});
