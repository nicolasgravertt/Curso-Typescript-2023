"use strict";
// Literal  types
let myName;
let userName;
// userName = 'Nicolas' -> No puede ser nicolas porque fue declarado como una variable que solo puede tener dave jhon o amy
// myName = "jhon"; -> Lo mismo aquí
// Funciones
const add = (a, b) => {
    return a + b;
};
const logMessage = (message) => {
    console.log(message);
};
logMessage("Hello!");
logMessage(add(2, 3));
// logMessage(add("a", "3"));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMessage(multiply(2, 2));
// parametros opcionales
const addAll = (a, b, c) => {
    if (typeof c !== "undefined")
        return a + b + c;
    return a + b;
};
// parametro por defecto
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMessage(addAll(2, 3, 2));
logMessage(addAll(2, 3));
logMessage(sumAll(2, 3));
logMessage(sumAll(undefined, 3));
// Rest parameters
// ...nums se refiere a el resto de los parametros los cuales seran identificados como un arreglo de numeros
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMessage(total(10, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// const infinite = () => {
//   let i: number = 1;
//   while (true) {
//     i++; // -----------> El tipo de dato que devuelve esta funcion es never
//     // ------------> quiere decir que la funcion consta de un bucle infinito
//     // ------------> El tipo never es solo devuelto por funciones que retornan un error
//   }
// };
// custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// uso del tipo "Never" en typescript
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (typeof value === "number")
        return "number";
    return createError("this should never happen!");
};
