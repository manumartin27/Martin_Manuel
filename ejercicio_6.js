/*
Declarar un array llamado “meses” y que tenga guardado los meses del año.
Luego el usuario debe poder ingresar en el navegador un número de 1 al 12,
y este le devolverá el nombre del mes.
 Por ejemplo, escribir un 5 debe devolver el mes mayo.
*/

var meses = ["undefined","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

num = window.prompt("Ingrese número de mes", "");

document.write(meses[num]);