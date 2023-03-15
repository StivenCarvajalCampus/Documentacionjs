//se pueden declarar funciones como si fueran objetos. Sin embargo, es un enfoque que no se suele utilizar en producción.
const saludar = new Function("return 'Hola';");

saludar(); // 'Hola'