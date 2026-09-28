// Simula un caricamento di 2 secondi
function caricaA() {
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 2000);
  });
}

// Simula un caricamento di 1.5 secondi
function caricaB() {
  return new Promise(resolve => {
    setTimeout(() => resolve(20), 1500);
  });
}

// Simula un caricamento di 1 secondo
function caricaC() {
  return new Promise(resolve => {
    setTimeout(() => resolve(30), 1000);
  });
}
//Creo un array di promise
async function caricaDashboard() {
  try {
    console.log("Caricamento dashboard...");

    // Le tre operazioni partono contemporaneamente
    const [a, b, c] = await Promise.all([
      caricaA(),
      caricaB(),
      caricaC()
    ]);

    console.log("Risultato A:", a);
    console.log("Risultato B:", b);
    console.log("Risultato C:", c);

  } catch (errore) {
    console.log("Errore nel caricamento:", errore);
  }
}

caricaDashboard();



// 2. Esecuzione sequenziale
async function caricaDashboardSequenziale() {
  console.time("sequenziale");

  const a = await caricaA(); // 2s
  const b = await caricaB(); // +1.5s
  const c = await caricaC(); // +1s

  console.timeEnd("sequenziale"); // ~4.5s totali

  return [a, b, c];
}

caricaDashboardSequenziale(); 
