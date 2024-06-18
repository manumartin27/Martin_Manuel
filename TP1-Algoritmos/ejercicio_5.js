/*
Ejecutarlo y luego agregar lineas de comentario
explicando que hace el programa en cada linea de código
*/

//Se declaran las variables.
let dato, resultado;

//Se da lugar al usuario a ingresar un dato, se lee y se almacena en una variable.
val1 = window.prompt("Introduce tu nombre", "...");

//Se da lugar al usuario a ingresar un dato, se lee y se almacena en otra variable.
val2 = window.prompt("Introduce tu apellido", "...");

//Se concatenan los datos anteriormente ingresados.
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ;

//Se muestra en pantalla el resultado de la concatenación hecha previamente.
document.write(resultado);