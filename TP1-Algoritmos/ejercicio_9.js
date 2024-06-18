/*
Crear un programa que recibe 5 (cinco) notas de un alumno, las mismas deben ser 
ingresadas por el usuario y ser naturales < 11.

Debe calcular el promedio e imprimir en pantalla:
si el valor de media es < 5 “Reprobado”
entre 6 y 8 “Aprobado”
y si es mayor a 8 “Sobresaliente”
*/

// Algoritmo principal
var notas = [];
var nota, promedio, estado, i = 0;

//Se piden las notas
for (i; i < 5; i++) {
    nota = (prompt("Ingrese la nota Nº" + (i + 1) + ": "));

    notas[i] = VALIDAR_NOTA(nota);
}

promedio = CALCULAR_PROMEDIO(notas);
estado = DETERMINAR_ESTADO(promedio);

//Se muestran los resultados
console.log("Promedio: " + promedio.toFixed(2));
console.log("Estado: " + estado);

// Función para validar que la nota sea un número natural del 1 al 10
function VALIDAR_NOTA(nota) {
    while (isNaN(nota) || nota < 0 || nota > 10 || nota.trim() === "") {
        nota = (prompt("Dígito inválido, debe ser un número natural del 1 al 10. Ingrese la nota Nº" + (i + 1) + " nuevamente: "));
    }

    return nota;
}

// Función para calcular el promedio de un arreglo de notas
function CALCULAR_PROMEDIO(notas) {
    var suma = 0;
    for (var i = 0; i < notas.length; i++) {
        suma = suma + parseFloat(notas[i]);
    }
    return suma / notas.length;
}

// Función para determinar el estado del alumno según su promedio
function DETERMINAR_ESTADO(promedio) {
    /*
    Siendo que en la consigna no se especifica qué hacer con los valores
    entre 5 y 6, se opta por agregarlo a los desaprobados (la alternativa sería agregarlo
    a los aprobados, pero eso también rompería la consigna en cierta manera)
    */
    if (promedio < 6) {
        return "Reprobado";
    } else if (promedio >= 6 && promedio <= 8) {
            return "Aprobado";
        } else {
                return "Sobresaliente";
            }
}