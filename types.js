var string;
var number;
var everyone;
var boolean;
var any;
var voidVariable;
var nullVariable;
var undefinedVariable;
// let stringArray: string[];
// let numberArray: number[];
// let booleanArray: boolean[];
var stringArray;
var numberArray;
var booleanArray;
var stringNumberTuple;
everyone = 'everyone';
string = ("Hello World " + everyone).slice(0, 9);
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
