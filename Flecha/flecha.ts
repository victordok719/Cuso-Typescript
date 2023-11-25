let suma = function(a:number, b:number){
    return a+b;
}
console.log(suma(5,3));

let sumaFlecha = (a:number, b:number) =>{//funcion flecha, primero van los argumentos y despues el simbolo
    return a + b;

}

console.log(sumaFlecha(3,2));

var obtenerNombre = function(){
    return "juan perez";
}

let obtenerNombreFlecha=() => "Juan Perez";
console.log(obtenerNombreFlecha);