const express = require('express');
const router = express.Router();

// Dati in memoria
let libri = [
  { id: 1, titolo: 'Il nome della rosa', autore: 'Umberto Eco', genere: 'romanzo' },
  { id: 2, titolo: 'Fondazione', autore: 'Isaac Asimov', genere: 'fantascienza' },
  { id: 3, titolo: 'Se questo è un uomo', autore: 'Primo Levi', genere: 'memoriale' },
  { id: 4, titolo: 'Neuromante', autore: 'William Gibson', genere: 'fantascienza' }
];

// ------------------------------------------------------
// GET /libri  (con filtro opzionale ?genere=...)
// ------------------------------------------------------
router.get('/', (req, res) => {
  const genere = req.query.genere; // sempre stringa

  let risultati = libri;

  if (genere) {
    risultati = risultati.filter(l => l.genere === genere);//filter() crea un nuovo array contenente solo gli elementi che superano il test (passati come funzione) 
  }

  res.json(risultati);
});

// ------------------------------------------------------
// GET /libri/:id  (singolo libro)
// ------------------------------------------------------
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);//trova l'id

  const libro = libri.find(l => l.id === id);//find() restituisce il primo elemento dell'array che soddisfa la condizione specificata

  if (!libro) {//se non trova l'elemento
    return res.status(404).json({ errore: "Libro non trovato" });//ritorna errore 404
  }

  res.json(libro);
});

// ------------------------------------------------------
// POST /libri  (creazione libro)
// ------------------------------------------------------
router.post('/', (req, res) => {
  const { titolo, autore, genere } = req.body;  //destructuring

  if (!titolo || !autore || !genere) {//trova se mancano dati
    return res.status(400).json({ errore: "Dati mancanti: titolo, autore, genere" });//ritorna errore 400
  }

  const nuovoLibro = {
    id: libri.length ? libri[libri.length - 1].id + 1 : 1,
    titolo,
    autore,
    genere
  };

  libri.push(nuovoLibro);

  res.status(201).json(nuovoLibro);
});

// ------------------------------------------------------
// DELETE /libri/:id  (elimina libro)
// ------------------------------------------------------
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const indice = libri.findIndex(l => l.id === id);

  if (indice === -1) {
    return res.status(404).json({ errore: "Libro non trovato" });
  }

  const eliminato = libri.splice(indice, 1)[0];

  res.json({ messaggio: "Libro eliminato", eliminato });
});

module.exports = router;
