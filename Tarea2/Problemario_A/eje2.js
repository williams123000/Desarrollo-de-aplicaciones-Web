// Ingresar "n" nombres de animales
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
  // Buscar el animal en el vector y obtener su índice si existe
  const indice = vector.indexOf(animalBuscado);
  // Imprimir los animales a la izquierda y a la derecha del animal buscado
  if (indice !== -1) {
    console.log("\nEl animal ah buscar es:", animalBuscado);
    console.log("\nAnimales a la izquierda:");
    // Iterar desde el índice anterior al inicio del vector
    for (let i = indice - 1; i >= 0; i--) {
      console.log(vector[i]);
    }
    console.log("\nAnimales a la derecha:");
    // Iterar desde el índice siguiente al final del vector
    for (let i = indice + 1; i < vector.length; i++) {
      console.log(vector[i]);
    }
  } else {
    console.log("El animal buscado no se encuentra en la lista.");
  }
}

// Función principal
async function buscarAnimales() {
  // Cambiar el valor de n para ingresar más o menos nombres de animales
  const n = 7; 
  // Ingresar los nombres de los animaless
  const nombres = await ingresarNombresAnimales(n);
  console.log("Nombres de los animales: ", nombres);
  
  // Solicitar al usuario que ingrese el nombre de un animal a buscar
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Solicitar al usuario que ingrese el nombre de un animal a buscar
  rl.question("Ingrese el nombre del animal que desea buscar: ", (animalBuscado) => {
    imprimirAnimalesAlrededor(nombres, animalBuscado);
    rl.close();
  });
}

// Función principal
buscarAnimales();
