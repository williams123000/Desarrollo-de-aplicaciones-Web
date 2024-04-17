class Polinomio {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    suma(otroPolinomio) {
      const nuevoA = this.a + otroPolinomio.a;
      const nuevoB = this.b + otroPolinomio.b;
      const nuevoC = this.c + otroPolinomio.c;
      return new Polinomio(nuevoA, nuevoB, nuevoC);
    }
  
    evaluar(x) {
      return this.a * x * x + this.b * x + this.c;
    }
  
    calcularRaices() {
      const discriminante = this.b * this.b - 4 * this.a * this.c;
      if (discriminante < 0) {
        return "No existen raíces reales";
      } else if (discriminante === 0) {
        const raiz = -this.b / (2 * this.a);
        return [raiz];
      } else {
        const raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
        const raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
        return [raiz1, raiz2];
      }
    }
  }
  
  // Ejemplo de uso
  const polinomio1 = new Polinomio(1, -3, 2); // x^2 - 3x + 2
  const polinomio2 = new Polinomio(2, 1, -1); // 2x^2 + x - 1
  
  const suma = polinomio1.suma(polinomio2);
  console.log("Suma:", suma); // Resultado de la suma de polinomios
  
  const rangoValores = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
  console.log("Evaluación del polinomio en el rango de valores:", rangoValores.map(x => polinomio1.evaluar(x)));
  
  console.log("Raíces del polinomio:", polinomio1.calcularRaices()); // Raíces del polinomio x^2 - 3x + 2
  