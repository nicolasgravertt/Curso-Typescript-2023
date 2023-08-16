"use strict";
// convertir
let a = "Hello!";
let b = a;
let c = a;
let d = "World";
let e = "World"; // no se puede usar en react
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
// cuidado porque TS no ve ningun problema, pero un string esta siendo devolvido en la funcion
let nextVal = addOrConcat(2, 2, "concat");
// 10 as string;
// sobre pone las reglas de casteo de TS, no recomendable
10;
// the DOM
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
const nextImg = document.getElementById("#img");
img === null || img === void 0 ? void 0 : img.src;
myImg.src;
