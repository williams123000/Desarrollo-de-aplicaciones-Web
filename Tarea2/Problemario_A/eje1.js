// Función para llenar un vector de tamaño 'tam' con números enteros aleatorios entre 'min' y 'max'
function llenarVectorAleatorio(tam, min, max) {
    const vector = [];
    for (let i = 0; i < tam; i++) {
      vector.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return vector;
  }
  
  // Función para separar los números pares e impares de un vector en dos nuevos vectores
  function separarParesImpares(vector) {
    const pares = [];
    const impares = [];
    vector.forEach(numero => {
      if (numero % 2 === 0) {
        pares.push(numero);
      } else {
        impares.push(numero);
      }
    });
    return { pares, impares };
  }
  
  // Crear un vector de 100 posiciones lleno de números enteros aleatorios entre 1 y 100
  const vectorOriginal = llenarVectorAleatorio(100, 1, 100);
  
  // Separar los números pares e impares del vector original
  const { pares, impares } = separarParesImpares(vectorOriginal);
  
  // Determinar cuál vector es más grande y contar el número de elementos en cada uno
  const numElementosPares = pares.length;
  const numElementosImpares = impares.length;
  let masGrande;
  if (numElementosPares > numElementosImpares) {
    masGrande = "pares";
  } else if (numElementosImpares > numElementosPares) {
    masGrande = "impares";
  } else {
    masGrande = "iguales";
  }
  
  // Mostrar los resultados
  console.log("Vector original:", vectorOriginal);
  console.log("Vector de números pares:", pares);
  console.log("Vector de números impares:", impares);
  console.log("El vector más grande es el de los", masGrande);
  console.log("Número de elementos en el vector de pares:", numElementosPares);
  console.log("Número de elementos en el vector de impares:", numElementosImpares);
  