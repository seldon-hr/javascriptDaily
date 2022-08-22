console.log(typeof null == 'object');

//Output true

/* 
Pese a que null es un primitivo, debido a un bug del lenguaje su tipo es object.
null es typeof 'object'
Este bug es muy antiguo y se determino que no vale la pena arreglarlo al día de hoy ya que se puden
romper mucho progrmas que pueden depender de este errro.

Este bug es bastante conocido en programadores experimentados y usado en 
entrevistas laborales para estimar tu conocimiento del lenguaje.

*/