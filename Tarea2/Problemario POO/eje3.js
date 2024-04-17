class Complejo {
    constructor(real, imaginario) {
      this.real = real;
      this.imaginario = imaginario;
    }
  
    suma(otroComplejo) {
      const nuevoReal = this.real + otroComplejo.real;
      const nuevoImaginario = this.imaginario + otroComplejo.imaginario;
      return new Complejo(nuevoReal, nuevoImaginario);
    }
  
    resta(otroComplejo) {
      const nuevoReal = this.real - otroComplejo.real;
      const nuevoImaginario = this.imaginario - otroComplejo.imaginario;
      return new Complejo(nuevoReal, nuevoImaginario);
    }
  
    modulo() {
      return Math.sqrt(this.real * this.real + this.imaginario * this.imaginario);
    }
  }
  
  // Ejemplo de uso
  const complejo1 = new Complejo(3, 4); // 3 + 4i
  const complejo2 = new Complejo(1, 2); // 1 + 2i
  
  const suma = complejo1.suma(complejo2); // (3 + 4i) + (1 + 2i) = 4 + 6i
  console.log("Suma:", suma);
  
  const resta = complejo1.resta(complejo2); // (3 + 4i) - (1 + 2i) = 2 + 2i
  console.log("Resta:", resta);
  
  const modulo = complejo1.modulo(); // |3 + 4i| = sqrt(3^2 + 4^2) = sqrt(9 + 16) = sqrt(25) = 5
  console.log("Modulo:", modulo);
  