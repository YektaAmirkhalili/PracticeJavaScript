// object literal 
/* Simply put, this will need args and keys to be same */

function studentInfo(name, group){
  let student = {
    name,
    group
  };

  return student;

}

studentInfo('Harry', 'Gryffendor');

//-----------------------------------
//object destruction
/* Simply put, this will ommit the need for objname.whateverKey */

let hogwartsHouses = {
  red: 'Gryffendor',
  blue: 'Ravenclaw',
  green: 'Slytherine',
  yellow: 'Hufflepuff'
}; 

const {red, blue, green, yellow} = hogwartsHouses;

console.log(`Harry belongs to ${red}`);


//-----------------------------------
//var
/*
  1. Scope of var:   
      - global scope are objects of window (part of window)
      - if a variable is inside a function, it's in that function's scope
      - if you use vars outside of their scope, you get error "not defined"
  2. Hoisting of var: 
      ***HOISTING: any var you declare, it'll go up to the 
      top of your "scope" and is declared with no value, so if you call it 
      before initialization you'll get an "undefined". 
  3. Problems with var: 
      - it's not block scope 
      - you can re-declare it or update it whenever you want 
  4. Other notes: 
      * you can re-declare variables or update them. 

*/

var name = 'Yekta'; //in order to define a variable 
//scope of name: window - Global 

function someFunc(){
  var insideFuncVar = 0;

  //scope of insideFuncVar: this function 
};

var name = 'newDeclarationIsFine';
name = 'updateValueIsAlsoFine'; 

function hoistingVarSample(){
  console.log(someVarforHoist); //undefined

  var someVarforHoist = 1;
  console.log(someVarforHoist); //1 
};

//-----------------------------------
//let
/*
  1. Scope of let: 
    - block scope: a block is anything between {} 
  2. Hoisting of let:
    - goes up to the top of the block, but won't get undefined 
    - you get reference error if you call it before declaration 
  3. Problems with let: NaN
  4. Other notes: 
    - cannot be re-declared, but can be updated 

*/

let name = 'Harry Potter';

if (1 == 1){
  let name = 'Hermione Granger';
  console.log(name); //Hermione Granger
}

console.log(name); //Harry Potter

let nameDeclared = 'Ron';
let nameDeclared = 'Ron Wiesley'; //Identifier 'nameDeclared' has already been declared

nameDeclared = 'Ron Updated Wiesley';
console.log(nameDeclared); //Ron Updated Wiesley

console.log(letHoistError); // reference error 
letHoistError = 2;

//-----------------------------------
//const
/*
  1. scope of const: Block scope
  2. Other notes:
    * can never change, not update nor re-declare
    * need to be initialized when declared

    FUN FACT: if you have a const object, you can't change values,
    but you can change keys and then value
    ----> you can stop this from happening by Object.freeze(objectConst)
*/

const someConstantVar;
someConstantVar = 1; 
//Uncaught SyntaxError: Missing initializer in const declaration

const anotherConst = 1; 

if (1 === 1){
  const anotherConst = 2; // no errors 
}

console.log(anotherConst); //1 

const constantObject1 = {
  name: 'Harry',
  familyName: 'Potter'
}

constantObject1.name  = 'Hermione';
constantObject1.familyName  = 'Granger';

console.log(constantObject1); //{name: "Hermione", familyName: "Granger"}

const constantObjectFrozen = {
  name: 'Harry',
  familyName: 'Potter'
}

Object.freeze(constantObjectFrozen);

constantObjectFrozen.name = 'Ron'; 
console.log(constantObjectFrozen); //{name: "Harry", familyName: "Potter"}

//-----------------------------------
//Spread operators 
/*
  Arrays 
    expand, clone, extract, etc 
  - if you want to access each array element instead of a for loop use this
  - combine arrays into a reciever 
  - copy an array so that references don't mess things up
*/

let arraySample = ['Harry', 'Hermione', 'Ronald'];

//separate array elements using for
for (let i = 0; arraySample.size; i++){
  console.log(arraySample[i]);
}
//seperate array elements using spread 
console.log(...arraySample);

//combine arrays 
let arrayOdd = [1,3,5];
let arrayEven = [2,4,6]; 

let arrayUnderTen = [...arrayOdd, ...arrayEven, 7,8,9];
console.log(arrayUnderTen);

//copy an array 
let arrayMain = [1,1,1];
let arrayCopyRef = arrayMain; //[1,1,1]

arrayCopyRed.push(5);
console.log(arrayMain); //[1,1,1,5]

let arrayCopyVal = [...arrayMain]
arrayCopyVal.push(5);
console.log(arrayMain); //[1,1,1]

//-----------------------------------
//Spread operators 
/*
  Objects
    - if you want to have a separate object with just a couple of new keys

*/

let objectMain = {
  username: 'babeXo1',
  dateJoined: 2021
}

let additionalInfoUsers = {
  ...objectMain,
  password: 'helloWorld123'
}

console.log(objectMain);
console.log(additionalInfoUsers);

//you can change some key values as well 
let newUserJoinedAtSameTime = {
  ...objectMain,
  username : 'newUserJoined'
}

//-----------------------------------
//Rest Operators 
/*
  exact opposite of spread: 
    - you don't know how many args a function gets 
    - it can only be added at the END 
*/

function weDontKnowArgs(a,b,...rest){
  console.log(`We know ${a} and ${b}, we added these also: ${rest}`);
}

weDontKnowArgs(1,2,10,20,30);

