let string: string;
let number: number;
let everyone: string;
let boolean: boolean;
let any: any;
let voidVariable: void;
let nullVariable: null;
let undefinedVariable: undefined;

// let stringArray: string[];
// let numberArray: number[];
// let booleanArray: boolean[];

let stringArray: Array<string>;
let numberArray: Array<number>;
let booleanArray: Array<boolean>;

let stringNumberTuple: [string, number];

everyone = 'everyone';
string = `Hello World ${everyone}`.slice(0, 9);

number = 34.5 + 213;

boolean = false;

any = 5;
any = false;
any = 'Any value';

stringArray = ['Hello', 'World'];
numberArray = [1, 3, 5];
booleanArray = [false, true, true];

stringNumberTuple = ['text', 20];

voidVariable = null;
voidVariable = undefined;

nullVariable = null;
nullVariable = undefined;

undefinedVariable = undefined;
undefinedVariable = null;

console.table([
  string,
  number,
  boolean,
  any,
  stringArray,
  numberArray,
  booleanArray,
  stringNumberTuple,
  voidVariable,
  nullVariable,
  undefinedVariable
]);
