// Clase Complejo con dos atributos real e imaginario que representan un número complejo.
class Complejo {
    constructor(real, imaginario) {
      this.real = real;
      this.imaginario = imaginario;
    }
    
    // Método para sumar dos números complejos. Formula: (a + bi) + (c + di) = (a + c) + (b + d)i
    suma(otroComplejo) {
      const nuevoReal = this.real + otroComplejo.real;
      const nuevoImaginario = this.imaginario + otroComplejo.imaginario;
      // Devuelve el resultado de la suma en un string
      return ` (${nuevoReal} + ${nuevoImaginario}i)`;
    }
    
    // Método para restar dos números complejos. Formula: (a + bi) - (c + di) = (a - c) + (b - d)i
    resta(otroComplejo) {
      const nuevoReal = this.real - otroComplejo.real;
      const nuevoImaginario = this.imaginario - otroComplejo.imaginario;
      // Devuelve el resultado de la resta en un string
      return ` (${nuevoReal} + ${nuevoImaginario}i)`;
    }
    
    // Método para calcular el módulo de un número complejo. Formula: |a + bi| = sqrt(a^2 + b^2)
    modulo() {
      // Devuelve el módulo del número complejo
      return Math.sqrt(this.real * this.real + this.imaginario * this.imaginario);
    }
  }
  
  // Crear dos objetos de la clase Complejo y realizar operaciones con ellos 
  // Valores de ejemplo: 5 + 4i y 2 + i
  const complejo1 = new Complejo(5, 4); 
  const complejo2 = new Complejo(2, 1); 
  
  const suma = complejo1.suma(complejo2); 
  console.log("Suma:", suma);
  
  const resta = complejo1.resta(complejo2); 
  console.log("Resta:", resta);
  
  
  const modulo = complejo1.modulo(); 
  console.log("Modulo:", modulo);
  