const personas = {
    "sofia": 19,
    "mario": 21,
    "elizabeth": 54,
    "lucas": 26
  };
  
  // Función para formatear el nombre con la primera letra en mayúscula
  function formatearNombre(nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1);
  }
  
  // Función para guardar las personas en un archivo de texto
  function guardarPersonas(personas) {
    let contenido = '';
    for (const nombre in personas) {
      if (personas.hasOwnProperty(nombre)) {
        const nombreFormateado = formatearNombre(nombre);
        const edad = personas[nombre];
        contenido += `${nombreFormateado}-${edad}\n`;
      }
    }
    require('fs').writeFileSync('personas.txt', contenido);
  }
  
  // Llamada a la función para guardar las personas
  guardarPersonas(personas);
  
