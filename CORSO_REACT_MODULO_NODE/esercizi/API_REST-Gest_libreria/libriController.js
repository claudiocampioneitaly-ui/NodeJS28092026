const { libri, getProssimoId } = require('./libri');

const getAll = (req, res) => { // getAll gestisce le richeiste GET verso /libri
  let filtrati = libri; // crea una copia dell'array libri
  if (req.query.genere) { // se viene fornito un parametro genere
    filtrati = libri.filter(l => l.genere === req.query.genere); // filtra i libri per genere
  }
  res.json({ totale: filtrati.length, dati: filtrati }); // restituisce il numero totale di libri e l'array filtrato
};

const getById = (req, res, next) => { // getById gestisce le richeiste GET verso /libri/:id
  const libro = libri.find(l => l.id == req.params.id); // cerca il libro per id
  if (!libro) { // se il libro non viene trovato
    const err = new Error('Libro non trovato'); // crea un errore
    err.status = 404; // imposta lo status code a 404
    return next(err); // passa l'errore al middleware di gestione errori
  }
  res.json(libro); // restituisce il libro trovato
};

const create = (req, res, next) => { // create gestisce le richeiste POST verso /libri
  const { titolo, autore, genere, anno } = req.body; // estrae i dati dal body della richiesta
  
  if (!titolo || !autore) { // se titolo o autore non sono presenti
    const err = new Error('titolo e autore sono obbligatori'); // crea un errore
    err.status = 400; // imposta lo status code a 400
    return next(err);
  }

  const nuovo = {
    id: getProssimoId(), // genera un nuovo id
    titolo, // assegna il titolo
    autore, // assegna l'autore
    genere: genere || null, // assegna il genere o null
    anno: anno || null // assegna l'anno o null
  };
  
  libri.push(nuovo); // aggiunge il nuovo libro all'array
  res.status(201).json(nuovo); // restituisce il libro appena creato
};

const update = (req, res, next) => { // update gestisce le richeiste PUT verso /libri/:id
  const libro = libri.find(l => l.id == req.params.id); // cerca il libro per id
  if (!libro) { // se il libro non viene trovato
    const err = new Error('Libro non trovato'); // crea un errore
    err.status = 404; // imposta lo status code a 404
    return next(err); // passa l'errore al middleware di gestione errori
  }

  const { titolo, autore, genere, anno } = req.body; // estrae i dati dal body della richiesta
  
  if (!titolo || !autore) { // se titolo o autore non sono presenti
    const err = new Error('titolo e autore sono obbligatori'); // crea un errore
    err.status = 400; // imposta lo status code a 400
    return next(err); // passa l'errore al middleware di gestione errori
  }

  libro.titolo = titolo; // aggiorna il titolo
  libro.autore = autore; // aggiorna l'autore
  libro.genere = genere; // aggiorna il genere
  libro.anno = anno; // aggiorna l'anno
  
  res.json(libro); // restituisce il libro modificato
};

const remove = (req, res, next) => { // remove gestisce le richeiste DELETE verso /libri/:id
  const index = libri.findIndex(l => l.id == req.params.id); // cerca il libro per id
  if (index === -1) { // se il libro non viene trovato
    const err = new Error('Libro non trovato'); // crea un errore
    err.status = 404; // imposta lo status code a 404
    return next(err); // passa l'errore al middleware di gestione errori
  }

  libri.splice(index, 1); // rimuove il libro dall'array
  res.status(204).send(); // restituisce una risposta vuota con status code 204 (No Content)
};

module.exports = { getAll, getById, create, update, remove }; // ES espone le funzioni del controller