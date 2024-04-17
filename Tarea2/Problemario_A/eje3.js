const readline = require('readline');

// Función para leer una fecha desde el teclado
function LeerFecha() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve, reject) => {
    rl.question("Ingrese el día: ", (dia) => {
      rl.question("Ingrese el mes: ", (mes) => {
        rl.question("Ingrese el año: ", (año) => {
          rl.close();
          resolve({ dia: parseInt(dia), mes: parseInt(mes), año: parseInt(año) });
        });
      });
    });
  });
}

// Función para obtener los días de un mes en un año dado
function DiasDelMes(mes, año) {
  const diasPorMes = [31, EsBisiesto(año) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return diasPorMes[mes - 1];
}

// Función para determinar si un año es bisiesto
function EsBisiesto(año) {
  return (año % 4 === 0 && año % 100 !== 0) || año % 400 === 0;
}

// Función para calcular el día juliano correspondiente a una fecha
function Calcular_Dia_Juliano(fecha) {
  let juliano = 0;
  for (let mes = 1; mes < fecha.mes; mes++) {
    juliano += DiasDelMes(mes, fecha.año);
  }
  juliano += fecha.dia;
  return juliano;
}

// Función principal
async function ProgramaPrincipal() {
  const fecha = await LeerFecha();
  const diaJuliano = Calcular_Dia_Juliano(fecha);
  console.log(`El día juliano correspondiente a la fecha ${fecha.dia}/${fecha.mes}/${fecha.año} es: ${diaJuliano}`);
}

// Llamada a la función principal
ProgramaPrincipal();
