/*
Creen una clase base y luego hereden de ella para crear una clase hija.
La clase representará algo general, como un vehículo, y la clase hija podría ser
un tipo específico de vehículo, como un automóvil.
En este ejercicio deberán realizar los siguientes pasos:

1- Definir una clase base Vehiculo con tres atributos (marca, modelo y año) y una función
(obtenerInformacion) para mostrar información del vehículo.
2- Crear una clase hija Automovil que hereda de Vehiculo y añadir dos nuevos atributos (color y precio).
También se sobrescribe el método obtenerInformacion para incluir la información específica del
automóvil.
3- Crear instancias de ambas clases y mostrar la información en la consola del navegador
*/

// Se define la clase base "Vehiculo"
class Vehiculo {
    constructor(marca, modelo, año) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
    }
  
    obtenerInformacion() {
      return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
  }
  
  // Se crea la clase hija "Automovil", que hereda de "Vehiculo"
  class Automovil extends Vehiculo {
    constructor(marca, modelo, año, color, precio) {
      super(marca, modelo, año);
      this.color = color;
      this.precio = precio;
    }
  
    obtenerInformacion() {
      return `${super.obtenerInformacion()}, Color: ${this.color}, Precio: ${this.precio}`;
    }
  }
  
  // Se crean instancias para ambas clases
  const autito = new Vehiculo("Renault", "Twingo", 2000);
  const automovil = new Automovil("Toyota", "Corolla", 2017, "Gris", "$23,000 (en dólares obviamente)");
  
  // Se muestra la información por consola
  console.log("Información del autito:");
  console.log(autito.obtenerInformacion());
  
  console.log("\nInformación del automóvil:");
  console.log(automovil.obtenerInformacion());