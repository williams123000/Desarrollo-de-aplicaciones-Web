class Fecha {
    constructor(dia, mes, año) {
      this.dia = dia;
      this.mes = mes;
      this.año = año;
    }
  
    obtenerFechaAbreviada() {
      return `${this.dia}/${this.mes}/${this.año}`;
    }
  
    obtenerFechaExtendida() {
      const meses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre"
      ];
  
      const nombreMes = meses[this.mes - 1]; // Restamos 1 porque los arrays en JavaScript son base 0
  
      return `${this.dia} de ${nombreMes} de ${this.año}`;
    }
  
    obtenerDia() {
      return this.dia;
    }
  
    obtenerMes() {
      return this.mes;
    }
  
    obtenerAño() {
      return this.año;
    }
  
    obtenerFechaCompleta() {
      const abreviada = this.obtenerFechaAbreviada();
      const extendida = this.obtenerFechaExtendida();
      return `${abreviada} - ${extendida}`;
    }
  }
  
  // Ejemplo de uso
  const miFecha = new Fecha(16, 2, 2000);
  console.log("Fecha completa:", miFecha.obtenerFechaCompleta());
  