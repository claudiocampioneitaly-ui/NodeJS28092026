const express = require('express');
const app = express();

// Middleware per leggere JSON nel body
app.use(express.json());

// Import router
const routerLibri = require('./routes-libri');

// Monta il router
app.use('/libri', routerLibri);

// Avvio server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server avviato sulla porta ${PORT}`);
});
