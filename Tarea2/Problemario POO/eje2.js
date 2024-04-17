// Clase Fecha con tres atributos dia, mes y año que representan una fecha.
class Fecha {
    constructor(dia, mes, año) {
      this.dia = dia;
      this.mes = mes;
      this.año = año;
    }
  
    // Método para obtener la fecha en formato abreviado. Ejemplo: 12/07/2000
    obtenerFechaAbreviada() {

      // Devuelve la fecha en formato abreviado
      if (this.mes < 10){
        return `Fecha abreviada (${this.dia}/0${this.mes}/${this.año})`;
      }else{
        return `Fecha abreviada (${this.dia}/${this.mes}/${this.año})`;
      }
     
    }
  
    // Método para obtener la fecha en formato extendido. Ejemplo: 12 de julio de 2000
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
  
      const nombreMes = meses[this.mes - 1]; 
      
      // Devuelve la fecha en formato extendido.
      return `Fecha extendida (${this.dia} de ${nombreMes} de ${this.año})`;
    }
  
    // Métodos para obtener el día, mes y año de la fecha.
    obtenerDia() {
      return this.dia;    
    }
  
    obtenerMes() {
      // Valida si el mes es válido
      if (this.mes < 1 || this.mes > 12) {
        return "Mes inválido";
      }
      return this.mes;
    }
  
    obtenerAño() {
      return this.año;
    }
  
    // Método para obtener la fecha completa en formato abreviado y extendido. Ejemplo: 12/07/2000 - 12 de julio de 2000
    obtenerFechaCompleta() {
      const abreviada = this.obtenerFechaAbreviada();
      const extendida = this.obtenerFechaExtendida();
      return `${abreviada} - ${extendida}`;
    }
  }
  
  // Crear un objeto de la clase Fecha con la fecha 16/02/2000 y mostrar la fecha completa.
  const miFecha = new Fecha(12, 7, 2000);
  console.log(miFecha.obtenerFechaCompleta());
  