const express = require('express');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const router = express.Router();

// Due utenti con password hashate (hash di "password123")
const utenti = [
  { id: 1, username: 'admin', passwordHash: '$2b$10$uhLCXNyGpfWoIC8hXmieqOn1kA2Kh8C.hNNy6R.ADGH1cNmtXUI7i', ruolo: 'admin' },
  { id: 2, username: 'bibliotecario1', passwordHash: '$2b$10$uhLCXNyGpfWoIC8hXmieqOn1kA2Kh8C.hNNy6R.ADGH1cNmtXUI7i', ruolo: 'bibliotecario1' }
];
// hash di 'password123'
//passwordHash:'$2b$10$uhLCXNyGpfWoIC8hXmieqOn1kA2Kh8C.hNNy6R.ADGH1cNmtXUI7i'


router.post('/login', async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    const err = new Error('username e password obbligatori');
    err.status = 400;
    return next(err);
  }

  const utente = utenti.find(u => u.username === username);
  
  if (!utente) {
    const err = new Error('Utente non trovato');
    err.status = 401;
    return next(err);
  }

  // Verifica password
  const passwordValida = await bcryptjs.compare(password, utente.passwordHash);
  
  if (!passwordValida) {
    const err = new Error('Nome utente e password errati');
    err.status = 401;
    return next(err);
  }

  // Crea JWT
  const token = jwt.sign(
    { id: utente.id, username: utente.username, ruolo: utente.ruolo },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  res.json({ token });
});

module.exports = router;