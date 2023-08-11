//type aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarrist = {
  name?: string; // ? --> dato opcional
  active: boolean;
  albums: stringOrNumberArray;
};

type userId = stringOrNumber;

// Literal  types

let myName: "Dave";

let userName: "Dave" | "Jhon" | "Amy";
// userName = 'Nicolas' -> No puede ser nicolas porque fue declarado como una variable que solo puede tener dave jhon o amy
// myName = "jhon"; -> Lo mismo aquí

// Funciones

const add = (a: number, b: number): number => {
  return a + b;
};

const logMessage = (message: any): void => {
  console.log(message);
};

logMessage("Hello!");
logMessage(add(2, 3));
// logMessage(add("a", "3"));

let subtract = function (c: number, d: number): number {
  return c - d;
};

// type mathFunction = (a: number, b: number) => number; -> establecer un formato para una funcion
interface mathFunction {
  (a: number, b: number): number; // --> lo mismo un formato para una funcion
}

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMessage(multiply(2, 2));

// parametros opcionales
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") return a + b + c;
  return a + b;
};

// parametro por defecto

const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMessage(addAll(2, 3, 2));
logMessage(addAll(2, 3));
logMessage(sumAll(2, 3));
logMessage(sumAll(undefined, 3));

// Rest parameters
// ...nums se refiere a el resto de los parametros los cuales seran identificados como un arreglo de numeros
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMessage(total(10, 2, 3, 4));

const createError = (errMsg: string): never => {
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
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};
// uso del tipo "Never" en typescript
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  return createError("this should never happen!");
};
