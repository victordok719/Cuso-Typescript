"use strict";
let suma = function (a, b) {
    return a + b;
};
console.log(suma(5, 3));
let sumaFlecha = (a, b) => {
    return a + b;
};
console.log(sumaFlecha(3, 2));
var obtenerNombre = function () {
    return "juan perez";
};
let obtenerNombreFlecha = () => "Juan Perez";
console.log(obtenerNombreFlecha);
