// esempi/giorno2/02-parametri-rotta-query-string.js
//
// Argomento: req.params (parametri di rotta) e req.query (query string).
// Esegui con: npm run g2:02
//
// Prova:
//   GET http://localhost:3000/dipendenti/42
//   GET http://localhost:3000/reparti/IT/dipendenti/7
//   GET http://localhost:3000/dipendenti?reparto=IT&limite=2

const express = require('express');
const app = express();
const PORT = 3000;

const tuttiIDipendenti = [
    { id: 1, nome: 'Luca', reparto: 'IT' },
    { id: 2, nome: 'Sara', reparto: 'HR' },
    { id: 3, nome: 'Marco', reparto: 'IT' },
    { id: 4, nome: 'Anna', reparto: 'CFO' }
];

// --- req.params: valori dentro l'URL, definiti con ":" nel percorso ---

// :id è un parametro di rotta
app.get('/dipendenti/:id', function (req, res) {
    const id = req.params.id;
    res.json({ messaggio: `Richiesto dipendente con id: ${id}`, tipoDiId: typeof id });
    // ATTENZIONE: req.params.id è sempre una STRINGA, anche se sembra un numero.
    // Per usarlo come numero: const idNumero = parseInt(req.params.id);
});

// si possono avere più parametri nello stesso URL
app.get('/reparti/:reparto/dipendenti/:id', function (req, res) { //definisce una rotta con due parametri dinamici :reparto e :id. Quando viene fatta una richiesta GET a questo percorso, i valori inseriti nella URL verranno estratti da req.params e resi disponibili tramite la destrutturazione dell'oggetto { reparto, id }
    const { reparto, id } = req.params; //qui avviene la destrutturazione, estraendo i parametri definiti nel percorso :reparto e :id
    res.json({ reparto, id }); // i parametri vengono restituiti come JSON 
});

// --- req.query: valori dopo il "?" nell'URL, per filtri/ordinamento/paginazione ---

app.get('/dipendenti', function (req, res) {
    const reparto = req.query.reparto; //estrapola il parametro reparto dalla query string
    const limite = req.query.limite; //es. '2' (stringa!)  

    let risultati = tuttiIDipendenti; //inizializza la lista dei risultati con tutti i dipendenti
    if (reparto) { //se viene fornito un parametro reparto, filtra i risultati
        risultati = risultati.filter(d => d.reparto === reparto); //crea una nuova array contenente solo i dipendenti che appartengono al reparto specificato
    }

    res.json(risultati.slice(0, parseInt(limite) || 20)); //restituisce i risultati limitati, convertendo il limite in numero intero. Se il limite non è specificato, viene utilizzato 20 come default
});    

app.listen(PORT, function () {
    console.log(`Server in ascolto su http://localhost:${PORT}`);
    console.log('req.params identifica UNA risorsa (/dipendenti/42); req.query filtra un elenco (/dipendenti?reparto=IT).');
});










