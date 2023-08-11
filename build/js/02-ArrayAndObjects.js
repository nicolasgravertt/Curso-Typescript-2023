"use strict";
let stringArr = ["one", "hey", "dave"];
let guitars = ["strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "Jhon";
stringArr.push("hey");
guitars[0] = 213;
guitars.unshift("Jim");
guitars = stringArr;
mixedData = guitars;
let test = [];
let bands = [];
bands.push("Van Halen");
// Tuple
let myTuple = ["dave", 42, true];
let mixed = ["Jhon", 1, false];
// asign a tuple to an array - no problem
mixed = myTuple;
// no se puede asignar un numero a la primera posicion ya que la tupla fue definida con un string en la primera posicion
// myTuple[0] = 24;
// asign an array to a tuple - problems
// myTuple = mixed
// Objects
let myObj;
myObj = [];
console.log(typeof myObj); // --> sigue siendo object.
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Nicolas",
    prop2: true,
};
// exampleObj.prop2 = 42 ---> no se puede asignar un numero porque implicitamente typescript entiende prop2 como un booleano.
// type Guitarrist = {
//   name: string;
//   active?: boolean; // ? --> dato opcional
//   albums: (string | number)[];
// };
// interface Guitarrist {
//   name?: string; // ? --> dato opcional
//   active: boolean;
//   albums: (string | number)[];
// }
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "UO81"],
};
let jp = {
    active: false,
    albums: ["I", "II", "IV"],
};
evh = jp;
const greedGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return "Hello!";
};
console.log(greedGuitarist(jp));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U); // ---> 1
