// null, undefined, boolean, integer, string


// V A R I A B L E S: 

const prm1 = 2;
const prm2 = 3;
const prm3 = 5;
const str1 = "a";
const str2 = "b";
const chr1 = 'u';
const chr2 = 'n';
const chr3 = 'o';

// OPERADORES ARITMÉTICOS:

//let x = 0;
//const suma2 = _ + _;
//console.log(suma2(prm1, prm2))


// OPERADORES LÓGICOS:

let falsa = false
let verdadera = true

let y = falsa && verdadera
let o = falsa || verdadera

console.log(y)
console.log(o)
console.log(!falsa)
console.log(!verdadera)

let edad = 20
if (edad < 18) {
    console.log("Sos menor");
}   else {
        console.log("Sos mayor");
}

let nota = 85;
if (nota == 100) {
    console.log("Sobresaliente");
}   else if (nota >= 80 && nota < 100) {
    console.log("Distinguido");
}
    else if (nota >= 60 && nota < 80) {
    console.log("Aprobado");
}
    else {
        console.log("Desaprobado");
}

let mayor60
if (nota >= 60) {
    mayor60 = true;
} else {
    mayor60 = false;
}
let resultado = mayor60 ? "Aprobado" : "Desaprobado"
console.log("Resultado: " + resultado)

let estacion = 2;
let nombreEstacion;
switch (estacion) {
    case 1: 
        nombreEstacion = "Otoño";
    break;

    case 2: 
        nombreEstacion = "Invierno";
    break;

    case 3: 
        nombreEstacion = "Primavera";
    break;

    case 4: 
        nombreEstacion = "Verano";
    break;

    default: 
        nombreEstacion = "Estación inválida";

}
console.log("Estamos en: ", nombreEstacion)

var num = 9
let resto = num % 2
let impar;
switch (resto) {
    case 0:
        impar = true;
        console.log(num + " es impar.")
        break;
    default:
        impar = false;
        console.log(num + " es par.")
        
}


// BÚCLES:
// Notas: "Continue" rompe todo en un "while".


for (let i = 5; i > 0; i--) {
    console.log(i)   
}
console.log("¡Despegue!")

let i = 5000
while (i > 0) {
    i = i - 1000
    console.log("Retiraste $1000. Plata restante: $" + i)    
}
if (i == 0) {
    console.log("Te quedaste sin plata, pobretón.")
}

for (let f = 0; f < 3; f++) {
    for (let c = 0; c < 3; c++) {
        console.log("Celda de matriz: A[" + f + "][" + c + "].")
    }    
}
console.log("Matriz recorrida sin problemas.")

let max = 3;
let bombaf = Math.floor(Math.random() * max);
let bombac = Math.floor(Math.random() * max);
for (let f = 0; f < 3; f++) {
    for (let c = 0; c < 3; c++) {
        console.log("Celda de matriz: A[" + f + "][" + c + "].")
        if (f == bombaf && c == bombac) {
            console.log("BOOM. Pisaste una mina.")
            break;
        }
        
    }
}

//const marcas = ["Volvo", "VolksWagen", "Fiat"];
//for (let nombre of marcas) {
//    console.log("Marcas de autos: ", nombre)
//    if (nombre == "VolksWagen") {
//        console.log("Hay VW");
//    } else {
//        console.log("No hay VW");
//    }
//}
// ^Después arreglá este quilombo que es una verga^
//


// FUNCIONES:

function suma() {
    let result = a + b
    return result
}

function cuentaJuntada(cantidadGente, gastoTotal) {
    let res = gastoTotal / gastoTotal
    return res
}


function sigma(n) {
    let k = n
    while (n > 0) { 
        k = k + intAnterior(n);
        n = n - 1
    }
    return k
    console.log(k)
}

let intAnterior = (n) => n - 1;

console.log(sigma(5))

let user = "user";
let pwrd = "qweasd";

//PREGUNTAR POR QUÉ CON SWITCH SE ROMPE AL VOLVER AL BREAK
//function isValid(username, password) {
//    switch (username) {
//        case "user":
//            passwordCheck(password);
//            break;
//        default: 
//            return true;
//    }   
//}

function isValid(username, password) {
    if (username == "user") {
        return passwordCheck(password)
    } else {
        return true}
}

function passwordCheck(str) {
    if (str == "qweasd") {
        return true;
    } else {
        return false;}
}

console.log(isValid(user, pwrd))

 