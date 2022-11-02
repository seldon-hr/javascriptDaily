const persona = {
    id: 1,
    nombre: 'Fernando',
  };
  persona.nombre = 'Pedro';
  console.log(persona.nombre);

  /* 
    Inicialmente el objeto persona tiene en la llave nombre la cadena Fernando pero luego hacemos persona.nombre = "Pedro" que actualiza el valor de nombre perdiendo la cadena Fernando.
  */