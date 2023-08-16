type One = string;
type Two = string | number;
type Three = "hello";

// convertir
let a: One = "Hello!";
let b = a as Two;
let c = a as Three;

let d = <One>"World";
let e = <string | number>"World"; // no se puede usar en react

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

// cuidado porque TS no ve ningun problema, pero un string esta siendo devolvido en la funcion
let nextVal: number = addOrConcat(2, 2, "concat") as number;

// 10 as string;
// sobre pone las reglas de casteo de TS, no recomendable
10 as unknown as string;

// the DOM
const img = document.querySelector("img") as HTMLImageElement;
const myImg = document.getElementById("#img")! as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("#img")!;

img?.src;
myImg.src;
