/*
Escribir un script que muestre la posición de la primera vocal de un texto
introducido por teclado. Por ejemplo: 

perro = “e” es la letra Nº2; árbol = “a” es la letra Nº1.
*/

function ENCONTRAR_PRIMER_VOCAL(texto) {
    // Convertir el texto a minúsculas (para simplificar)
    texto = texto.toLowerCase();

    // Definir un array con las vocales
    var vocales = ['a', 'e', 'i', 'o', 'u'];

    // Iterar sobre cada caracter del texto
    for (var i = 0; i < texto.length; i++) {
        // Verificar si el caracter actual es una vocal
        if (vocales.includes(texto[i])) {
            // Si es una vocal, devolver su posición y terminar la función
            return "La primera vocal es '" + texto[i] + "' y está en la posición Nº" + (i + 1);
        }
    }

    // Si no se encontró ninguna vocal, devolver un mensaje diciendo eso
    return "No se encontraron vocales en el texto.";
}

// Obtener el texto introducido por el usuario mediante un prompt
var texto = prompt("Introduce un texto:");

// Llamar a la función y mostrar el resultado
alert(ENCONTRAR_PRIMER_VOCAL(texto));