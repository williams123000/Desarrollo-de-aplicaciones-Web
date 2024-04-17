// Clase Punto con dos atributos x y y que representan las coordenadas de un punto en el plano cartesiano.
class Punto {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// Clase Rectangulo con cuatro atributos p1, p2, p3 y p4 que representan los vértices de un rectángulo.
class Rectangulo {
  constructor(p1, p2, p3, p4) {
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.p4 = p4;
  }

  // Método estático para crear un rectángulo a partir de la base y la altura.
  static desdeBaseAltura(base, altura) {
    const p1 = new Punto(0, 0);
    const p2 = new Punto(base, 0);
    const p3 = new Punto(base, altura);
    const p4 = new Punto(0, altura);
    return new Rectangulo(p1, p2, p3, p4);
  }

  // Método para calcular la superficie del rectángulo. Formula: base * altura
  calcularSuperficie() {
    const base = this.p2.x - this.p1.x;
    const altura = this.p3.y - this.p2.y;
    return base * altura;
  }

  // Método para desplazar el rectángulo en el plano cartesiano.
  desplazar(x, y) {
    this.p1.x += x;
    this.p1.y += y;
    this.p2.x += x;
    this.p2.y += y;
    this.p3.x += x;
    this.p3.y += y;
    this.p4.x += x;
    this.p4.y += y;
  }
}

// Crear un rectángulo a partir de los vértices p1, p2, p3 y p4
const p1 = new Punto(1, 1);
const p2 = new Punto(5, 1);
const p3 = new Punto(5, 4);
const p4 = new Punto(1, 4);
// Crear un objeto de la clase Rectangulo con los vértices anteriores y calcular su superficie.
const rectangulo1 = new Rectangulo(p1, p2, p3, p4);
console.log("Superficie del rectángulo 1:", rectangulo1.calcularSuperficie());

// Crear un rectángulo a partir de la base y la altura y calcular su superficie.
const rectangulo2 = Rectangulo.desdeBaseAltura(6, 3);
console.log("Superficie del rectángulo 2:", rectangulo2.calcularSuperficie());

// Desplazar el rectángulo 2 en el plano cartesiano y mostrar las nuevas coordenadas.
rectangulo2.desplazar(3, -1);
console.log("Nuevas coordenadas del rectángulo 2:");
console.log(rectangulo2.p1, rectangulo2.p2, rectangulo2.p3, rectangulo2.p4);
