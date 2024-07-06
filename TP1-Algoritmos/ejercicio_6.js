/*
Declarar un array llamado “meses” y que tenga guardado los meses del año.
Luego el usuario debe poder ingresar en el navegador un número de 1 al 12,
y este le devolverá el nombre del mes.
 Por ejemplo, escribir un 5 debe devolver el mes mayo.
*/

//Se declara el array con los nombres de meses, el cual se usará para desplegarlos según el ingreso del usuario
var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

//Se da lugar al usuario a hacer un ingreso
num = window.prompt("Ingrese un número de mes", "");

//Se le resta 1 a la variable 'num' para que coincida con los índices del array 'meses'
num--;

//Se valida el ingreso (debe ser un número entero entre 1 y 12)
while (num<0 || num>11 || isNaN(num)) {
    num = window.prompt("Ingreso inválido. Por favor, ingrese un número de mes (entero del 1 al 12)", "");
    num--;
}

//Se imprime el nombre del mes correspondiente al número ingresado
document.write(meses[num]);