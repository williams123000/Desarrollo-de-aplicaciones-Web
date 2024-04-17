class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // Método para calcular la distancia desde el origen hasta el punto
    calcularDistancia() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    // Método para convertir las coordenadas a formato cartesiano
    to_string_cartesianas() {
        return "(" + this.x + ", " + this.y + ")";
    }

    // Método para convertir las coordenadas a formato polar
    to_string_polares() {
        let distancia = this.calcularDistancia();
        let angulo = Math.atan2(this.y, this.x); // Calcula el ángulo en radianes
        angulo = angulo * (180 / Math.PI); // Convierte el ángulo a grados

        // Asegurarse de que el ángulo esté en el rango de 0 a 360 grados
        if (angulo < 0) {
            angulo = 360 + angulo;
        }

        return "(" + distancia.toFixed(2) + ", " + angulo.toFixed(2) + "°)";
    }
}

// Ejemplo de uso
let punto = new Punto(3, 4);
console.log("Coordenadas cartesianas:", punto.to_string_cartesianas());
console.log("Coordenadas polares:", punto.to_string_polares());