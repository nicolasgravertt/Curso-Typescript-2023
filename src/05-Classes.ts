class Coder {
  secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello I'm ${this.age}`;
  }
}

const Dave = new Coder("Dave", "Rock", 42);
console.log(Dave.getAge());

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
// console.log(Sara.age); --> Property 'age' is private and only accessible within class 'Coder'.
// console.log(Sara.lang); --> Property 'lang' is protected and only accessible within class 'Coder' and its subclasses.
///////////////////////////////////////////////////////////

interface musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Pianist implements musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    (this.name = name), (this.instrument = instrument);
  }

  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Pianist("Bethoven", "Piano");
console.log(Page.play("Dream"));

/////////////////////////////////////////////////////////////

class Peeps {
  static count: number = 0;
  static getNumber(): number {
    return Peeps.count;
  }
  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const Jhon = new Peeps("Jhon");
const Amy = new Peeps("Amy");
const Steve = new Peeps("Steve");

console.log(Peeps.count);

////////////////////////////////////////////////////////////

class Bands {
  private dataState: string[];
  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else {
      throw new Error("Param is not an array of strings");
    }
  }
}

const myBands = new Bands();
myBands.data = ["Neil Young", "Led Zep"];
console.log(myBands.data);
myBands.data = [...myBands.data, "ZZ Top"];
console.log(myBands.data);
