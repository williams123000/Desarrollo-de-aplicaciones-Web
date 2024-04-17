const readline = require('readline');

// Función para solicitar al usuario que ingrese "n" nombres de animales
function ingresarNombresAnimales(n) {
  const nombres = [];
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve, reject) => {
    rl.question(`Ingrese el nombre del animal ${1}: `, (nombre) => {
      nombres.push(nombre);
      rl.on('line', (line) => {
        if (nombres.length < n) {
          rl.question(`Ingrese el nombre del animal ${nombres.length + 1}: `, (nombre) => {
            nombres.push(nombre);
          });
        } else {
          rl.close();
          resolve(nombres);
        }
      });
    });
  });
}

// Función para imprimir los nombres de los animales al lado de la posición de un animal dado
function imprimirAnimalesAlrededor(vector, animalBuscado) {
  const indice = vector.indexOf(animalBuscado);
  if (indice !== -1) {
    console.log("El animal buscado es:", animalBuscado);
    console.log("Animales a la izquierda:");
    for (let i = indice - 1; i >= 0; i--) {
      console.log(vector[i]);
    }
    console.log("Animales a la derecha:");
    for (let i = indice + 1; i < vector.length; i++) {
      console.log(vector[i]);
    }
  } else {
    console.log("El animal buscado no se encuentra en la lista.");
  }
}

// Función principal
async function buscarAnimales() {
  const n = 5; // Cantidad de nombres de animales a ingresar
  const nombres = await ingresarNombresAnimales(n);
  console.log("Nombres de animales ingresados:", nombres);
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Ingrese el nombre del animal que desea buscar: ", (animalBuscado) => {
    imprimirAnimalesAlrededor(nombres, animalBuscado);
    rl.close();
  });
}

// Llamada a la función principal
buscarAnimales();
