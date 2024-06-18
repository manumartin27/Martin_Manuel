/*
A partir del siguiente array que se proporciona:

var valores = [true, false, 2, "hola", "mundo", 3, "char"];

1. Determinar cuál de los “elementos de texto” es mayor, es decir el que contenga más letras.
2. Imprimir estos elementos de menor a mayor cantidad de letras.
3. Determinar el resultado de las cuatro operaciones matemáticas básicas 
(suma, resta, multiplicación y división) realizadas con los dos elementos numéricos
*/

// Array de valores proporcionado
var valores = [true, false, 2, "hola", "mundo", 3, "char"];

// Algoritmo principal (llamado de funciones)
console.log("1. El mayor elemento de texto (con más letras) es:", DETERMINAR_MAYOR() );
console.log("2. Los elementos ordenados de menor a mayor cantidad de letras son: ");
 IMPRIMIR_EN_ORDEN();
console.log("3. Las operaciones matemáticas básicas (con los elementos numéricos del array) son: ");
OPERACIONES();

// Función para encontrar el string más largo
function DETERMINAR_MAYOR() {
    // Filtrar solo los string
    var elementosDeTexto = valores.filter(function(elemento) {
        return typeof elemento === 'string';
    });

    // Ordenar los string por longitud (menor a mayor)
    elementosDeTexto.sort(function(a, b) {
        return a.length - b.length;
    });

    //Guardar string más largo
    var elementoMayor = elementosDeTexto[elementosDeTexto.length - 1];

    // Devolver string más largo
    return elementoMayor;
}

// Función para imprimir los string ordenados por longitud
function IMPRIMIR_EN_ORDEN() {
    var elementosDeTexto = valores.filter(function(elemento) {
        return typeof elemento === 'string';
    });

    elementosDeTexto.sort(function(a, b) {
        return a.length - b.length;
    });

    // Imprimir los strings ordenados;
    elementosDeTexto.forEach(function(elemento) {
        console.log(elemento);
    });
}

// Función para realizar las operaciones matemáticas básicas con los elementos numéricos
function OPERACIONES() {
    // Filtrar sólo las variables de tipo número
    var numeros = valores.filter(function(elemento) {
        return typeof elemento === 'number';
    });

    // Hacer las operaciones
    var suma = numeros[0] + numeros[1];
    var resta = numeros[0] - numeros[1];
    var multiplicacion = numeros[0] * numeros[1];
    var division = numeros[0] / numeros[1];

    // Mostrar resultados en consola
    console.log("Suma:", suma);
    console.log("Resta:", resta);
    console.log("Multiplicación:", multiplicacion);
    console.log("División:", division);
}