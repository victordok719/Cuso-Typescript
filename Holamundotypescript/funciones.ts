let saludo = "Hola mundo desde TypeScript";

saludo = "cambio";

let numero: number = 10;

let cualquiera: any;
cualquiera ="cadena";
cualquiera = 10;

const PI = 3.14;

function saludar(){
    console.log(saludo);
    console.log(numero);
    console.log(PI);
}

saludar();