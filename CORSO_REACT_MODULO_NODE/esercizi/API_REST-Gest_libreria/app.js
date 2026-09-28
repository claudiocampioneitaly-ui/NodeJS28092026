
require('dotenv').config(); // porta da file .env al processo NodeJs
const express = require('express'); // importa l'engine Express
const cors = require('cors'); // importa il middleware CORS
const morgan = require('morgan'); // importa il middleware Morgan

const libriRouter = require('./libriRoutes'); // importa il router dei libri
const authRouter = require('./auth'); //  importa il router auth
const verificaJWT = require('./verificaJWT'); // importa il middleware verificaJWT


const app = express(); // crea l'istanza dell'app Express
const PORT = process.env.PORT || 3000; // definisce la porta

// Middleware (ordine corretto)
app.use(cors()); // habilita CORS. CORS permette richieste da altri domini
app.use(morgan('dev')); // abilita Morgan (log delle richieste) . mostra le richeiste HTTP nel terminale
app.use(express.json()); // abilita l'analisi del corpo JSON . Permette di leggere il body delle richieste in formato JSON

// Auth (pubblica)
app.use('/auth', authRouter);


// Rotta benvenuto
app.get('/', (req, res) => { //  crea una rotta GET sulla radice '/' 
  res.json({ messaggio: 'Benvenuto all\'API Libreria' }); // Invia una risposta JSON di benvenuto
});

// Libri (protetta con JWT)
app.use('/libri', verificaJWT, libriRouter); // 👈 verificaJWT prima del router

// 404 . viene attivato quando nessuna delle rotte precedenti corrisponde alla richiesta
app.use((req, res) => { // crea una rotta GET sulla radice '/' 
  res.status(404).json({ errore: 'Rotta non trovata' }); // Invia una risposta JSON di benvenuto
});

// Middleware errore 
app.use((err, req, res, next) => { // . viene attivato quando si verifica un errore
  console.error(err.stack); // . fa apparire la traccia dell'errore nel terminale
  const status = err.status || 500; //  assegna a status il valore di err.status se esiste, altrimenti 500
  res.status(status).json({ errore: err.message }); //  invia al client un JSON con solo il messaggio di errore
});

app.listen(PORT, () => {
  console.log(`Server su http://localhost:${PORT}`);
});