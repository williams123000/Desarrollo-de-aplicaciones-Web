class Punto {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }
  
  class Rectangulo {
    constructor(p1, p2, p3, p4) {
      this.p1 = p1;
      this.p2 = p2;
      this.p3 = p3;
      this.p4 = p4;
    }
  
    static desdeBaseAltura(base, altura) {
      const p1 = new Punto(0, 0);
      const p2 = new Punto(base, 0);
      const p3 = new Punto(base, altura);
      const p4 = new Punto(0, altura);
      return new Rectangulo(p1, p2, p3, p4);
    }
  
    calcularSuperficie() {
      const base = this.p2.x - this.p1.x;
      const altura = this.p3.y - this.p2.y;
      return base * altura;
    }
  
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
  
  // Ejemplo de uso
  const p1 = new Punto(0, 0);
  const p2 = new Punto(4, 0);
  const p3 = new Punto(4, 3);
  const p4 = new Punto(0, 3);
  const rectangulo1 = new Rectangulo(p1, p2, p3, p4);
  console.log("Superficie del rectángulo 1:", rectangulo1.calcularSuperficie());
  
  const rectangulo2 = Rectangulo.desdeBaseAltura(4, 3);
  console.log("Superficie del rectángulo 2:", rectangulo2.calcularSuperficie());
  
  rectangulo2.desplazar(2, 2);
  console.log("Nuevas coordenadas del rectángulo 2:");
  console.log(rectangulo2.p1, rectangulo2.p2, rectangulo2.p3, rectangulo2.p4);
  