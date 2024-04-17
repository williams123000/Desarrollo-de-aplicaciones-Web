// Clase Polinomio con tres atributos a, b y c que representan los coeficientes de un polinomio de segundo grado.
class Polinomio {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
    }
    
    // Método para sumar dos polinomios de segundo grado. Formula: (a1x^2 + b1x + c1) + (a2x^2 + b2x + c2) = (a1 + a2)x^2 + (b1 + b2)x + (c1 + c2)
    suma(otroPolinomio) {
      const nuevoA = this.a + otroPolinomio.a;
      const nuevoB = this.b + otroPolinomio.b;
      const nuevoC = this.c + otroPolinomio.c;
      return new Polinomio(nuevoA, nuevoB, nuevoC);
    }
  
    // Método para evaluar el polinomio en un valor de x. Formula: ax^2 + bx + cs
    evaluar(x) {
      return this.a * x * x + this.b * x + this.c;
    }
  
    // Método para calcular las raíces del polinomio de segundo grado. Formula: x = (-b ± sqrt(b^2 - 4ac)) / 2a
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
  
// Crear dos objetos de la clase Polinomio con diferentes coeficientes
const polinomio1 = new Polinomio(3, 0, -5); 
const polinomio2 = new Polinomio(1, -2, 1);

// Realizar operaciones con los polinomios
const suma = polinomio1.suma(polinomio2);
console.log("Suma:", suma); // Resultado de la suma de polinomios

// Definir un nuevo rango de valores para la evaluación del polinomio
const nuevoRangoValores = [-2, -1, 0, 1, 2];
console.log("Evaluación del polinomio", nuevoRangoValores.map(x => polinomio1.evaluar(x)));

// Calcular las raíces del polinomio
console.log("Raíces del polinomio:", polinomio1.calcularRaices());
  