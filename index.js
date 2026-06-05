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
function isValid2(username, password) {
    switch (username) {
        case "user":
            return passwordCheck(password);
            break;
        default: 
            return true;
    }   
}

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

// METHODS:

let numeros = [1, 2, 3, 4, 5];
let cuadrados = numeros.map(numeros => numeros * numeros);
console.log("Cuadrados: ", cuadrados);

let edades = [15, 22, 18, 10, 30];
let mayoresDeEdad = edades.filter(edades => edades >= 18);
console.log("Edades de los adultos responsables: ", mayoresDeEdad)

let ventas = [120, 85, 400, 150];
let gananciasTotales = ventas.reduce((acc, ventas) => acc + ventas, 0)
console.log("Ganancias totales: ", gananciasTotales)

let nombres = ["Juan", "Ana", "Zoe", "Carlos"];
let nombresAcomodados = nombres.sort()
console.log("Nombres en órden alfabético: ", nombresAcomodados)

const expenses = [
    {nombre: "ana", gasto: 120},
    {nombre: "luis", gasto: 80},
    {nombre: "carla", gasto: 100}
];

const expenses2 = [
    {nombre: "ana", gasto: 250, consumido: "comida"},
    {nombre: "luis", gasto: 150, consumido: "alcohol"},
    {nombre: "carla", gasto: 200, consumido: "alcohol"}
];

const expenses3 = [
    {nombre: "ana", gasto: 250, consumido: "comida", propina: 250},
    {nombre: "luis", gasto: 150, consumido: "alcohol", propina: 0},
    {nombre: "carla", gasto: 200, consumido: "alcohol", propina: 50}
];

let expenseSplitter = (sacarCuenta(chuparValues(chuparEntries(expenses)))) 
let expenseSplitterComida = (sacarCuenta(chuparValues(chuparGlotones(expenses2))))
let expenseSplitterAlcohol = (sacarCuenta(chuparValues(chuparAlcoholicos(expenses2))))
let expenseSplitterPropina = (sacarCuenta(chuparValuesConPropina(chuparEntries(expenses3))))


function chuparEntries(dicc) {
    let listaVacia = [];
    for (let entry of dicc) {
        listaVacia.push(entry)
    }
    return listaVacia
}

function chuparAlcoholicos(array) {
    let listaVacia = [];
    for (let elem of array) {
        if (Object.values(elem)[2] == "alcohol") {
            listaVacia.push(elem)
        }
    }
    return listaVacia
}


function chuparGlotones(array) {
    let listaVacia = [];
    for (let elem of array) {
        if (Object.values(elem)[2] == "comida") {
            listaVacia.push(elem)
        }
    }
    return listaVacia
}

function chuparValues(array) {
    let listaVacia = [];
    for (let elem of array) {
        let value = Object.values(elem)[1]
        listaVacia.push(value)
    }
    return listaVacia
}

function chuparValuesConPropina(array) {
    let listaVacia = [];
    for (let elem of array) {
        let value = Object.values(elem)[1]
        let propina = Object.values(elem)[3]
        if (propina > 0) {
            listaVacia.push(value + propina)
        } else {listaVacia.push(value)}
    }
    return listaVacia
}            

function sacarCuenta(array) {
    let dividendo = array.length;
    let numerador = array.reduce((acc, array) => acc + array, 0);
    return (numerador / dividendo).toFixed(2)
}

console.log(expenseSplitter)
console.log(expenseSplitterComida)
console.log(expenseSplitterAlcohol)
console.log(expenseSplitterPropina)


// STRINGS: 

// innecesario
//let abecedario = [
//    {min: "a", mayus: "A"}, {min: "b", mayus: "B"}, {min: "c", mayus: "C"}, {min: "d", mayus: "D"},
//    {min: "e", mayus: "E"}, {min: "f", mayus: "F"}, {min: "g", mayus: "G"}, {min: "h", mayus: "H"},
//    {min: "i", mayus: "I"}, {min: "j", mayus: "J"}, {min: "k", mayus: "K"}, {min: "l", mayus: "L"},
//    {min: "m", mayus: "M"}, {min: "n", mayus: "N"}, {min: "ñ", mayus: "Ñ"}, {min: "o", mayus: "O"},
//    {min: "p", mayus: "P"}, {min: "q", mayus: "Q"}, {min: "r", mayus: "R"}, {min: "s", mayus: "S"},
//    {min: "t", mayus: "T"}, {min: "u", mayus: "U"}, {min: "v", mayus: "V"}, {min: "w", mayus: "W"},
//    {min: "x", mayus: "X"}, {min: "y", mayus: "Y"}, {min: "z", mayus: "Z"},
//]
//
//
//function convertirMayus(chr) {
//    for (let letra of abecedario) {
//        if (chr == Object.values(letra)[0]) {
//            return Object.values(letra)[1]
//        }
//    }
//}

let fullName = " juan perez  ";
let nombreMayus = (nombre => nombre.trim().toUpperCase())
console.log(nombreMayus(fullName))

let mailEjemplo = "diegobottegoni@gmail.com"
let emailValido = (mail => mail.includes("@") && mail.endsWith(".com"))
console.log(emailValido(mailEjemplo))


function conteoVocales(palabra) {
    let vocales = "aeiou";
    let i = 0;
    for (let chr of palabra) {
        if (vocales.includes(chr)) {
            i++
        }
    }
    return i
}
console.log(conteoVocales("programacion"))

let saludoPrograma = ((nombre, lenguaje) => "Hi " + nombre + "! Welcome to the " + lenguaje + " world.")
console.log(saludoPrograma("Lucía", "Javascript"))

let passwordValidator = (A => A);
function chequeoFlags(palabra) {
    const mayus = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    const minus = mayus.toString().toLowerCase();
    const symbols = "!@#$%^&*"
    const nums = "0123456789"
    let flagMayus = false;
    let flagMinus = false;
    let flagSymbols = false;
    let flagNums = false;
    let flagLong = false;
    let flags = [];

    if (palabra.length >= 8) {
        flagLong = true;
    }

    for (let chr of palabra) {
        if (mayus.includes(chr)) {
            flagMayus = true;
        } else if (minus.includes(chr)) {
            flagMinus = true;
        } else if (symbols.includes(chr)) {
            flagSymbols = true;
        } else if (nums.includes(chr))  {
            flagNums = true;
        }
    }
    
    flags.push({"mayus": flagMayus}, {"minus": flagMinus}, {"symbols": flagSymbols}, {"nums": flagNums}, {"long": flagNums})
    return flags
    console.log(flags)
    

}
console.log(chequeoFlags("Veinte23!"))

// OBJETOS & JSON:

const person = {
    name: "Diego Bottegoni",
    age: "50",
    country: "Argentina"
};

const monster = {
    flavor: "Energy",
    price: 3200,
    in_argentina: true
};

//OBJETO ► ESPÉCIMEN: DIEGO BOTTEGONI.
console.log(person)
console.log("Espécimen: ", person.name);
console.log("Creación del espécimen: ", 2026 - Number(person["age"]));
console.log("Alimentación del espécimen: Monster ", monster.flavor);
person.tag = "#47";
person.status = "alive";
person.termination = 2027;
console.log("Identificación del espécimen: ", person.tag);
console.log("Estado de " + person.tag + ": ", person["status"]);
console.log("Terminación: Aprobada. Fecha de terminación: ", person.termination);
console.log(person)

// Challenge #1:
const car = {
    brand: "Pontiac",
    model: "Firebird",
    variety: "Trans Am",
    year: 1982
}

console.log("Ojalá mi auto fuese un ", car.brand, car.model, car.variety, "de", car.year)

// Challenge #2:
const persona5 = {
    name: "Timmy",
    age: 12,
    status: "Alive"
};

let getOlder = (sujeto => sujeto.age + 1);
console.log(getOlder(persona5))

// Challenge #3:

//let cloneObject = ((obj) => clone = {...obj})
//console.log(cloneObject(persona5))

function clonarObj(obj) {
    const clone = {...obj};
    return clone
}
console.log(clonarObj(persona5))


// Challenge Final:

const users = [
    {name: "Ana", email: "ana@gmail.com", isAdmin: false, age: 22},
    {name: "Luis", email: "luis@gmail.com", isAdmin: true, age: 30},
    {name: "Carla", email: "carla@gmail.com", isAdmin: false, age: 17},
    {name: "José", email: "jose@hotmail.com", isAdmin: true, age: 64},
    {name: "Richard", email: "richard.noreply@yahoo.com", isAdmin: true, age: 35}
]

function userDataSelection(array, input) {
    switch (input) {
        case 1:
            return userNames(array);
            break;
        case 2:
            return userAdults(array);
            break;
        case 3:
            return userEmails(array);
            break;
        case 4:
            return userToJSON(array);
            break;
        case 5:
            return userJSONtoString(userToJSON(array));
            break;
        case 6:
            return userAdminCount(array);
            break;
        default:
            console.log("Input inválido") 
    }
}

function userNames(array) {
    let names = [];
    for (let user of users) {
        names.push(user.name)
    }
    return names
}
console.log(userNames(users))

function userAdults(array) {
    let adults = [];
    for (let user of users) {
        if (user.age >= 18) {
            adults.push(user.name)
        }
    }
    return adults
}
console.log(userAdults(users))

function userEmails(array) {
    let emails = [];
    for (let user of users) {
        emails.push(user.email)
    }
    return emails
}
console.log(userEmails(users))

function userToJSON(array) {
    const jsonString = JSON.stringify(users)
    return jsonString
}
console.log(userToJSON(users))

function userJSONtoString(string) {
    const parsedObject = JSON.parse(string)
    return parsedObject
}
console.log(userJSONtoString(userToJSON(users)))

function userAdminCount(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].isAdmin === true) {
            suma++
        }
    }
    return suma
}
//console.log(userAdminCount(users))
console.log(userDataSelection(users, 6))
