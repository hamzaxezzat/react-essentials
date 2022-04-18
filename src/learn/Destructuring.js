// Destructring
const names = ["amr", "Omar", "Amar", "Amer"];
const [name1, name2, name3, name4] = names;
console.log(name1, name2, name3, name4);

// Skipping
const [, , name3, name4] = names;
console.log(name3, name4);

// Default Values (Fot value not exist)
const names2 = ["amr"];
const [name1, name2 = "n/a"] = names;
console.log(name2); // n/a

// Assigning the rest of an array for variable
const names3 = ["amr", "Omar", "Amar", "Amer"];
const [name1, ...params] = names3;
console.log(params); // n/a

// Parsing Array
function fullName() {
    return ["amr", "Omar", "Amar"];
}
const [fname, ...params] = fullName();
console.log(fname, params);

// swapping Variables
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1

// ========== Opject Destructuring ==========

// Example
const userData = { name: "Hamza", age: 25, address: "Bochum" };
const { name, age, address } = userData;
console.log(name, age, address); // "Hamza" 25 Bochum

// Assigning to new variable name (re-name)
const userData = { name: "Hamza", age: 25, address: "Bochum" };
const { name: myname, age: myage, address } = userData;
console.log(myname, myage, address); // "Hamza" 25 Bochum

// Default Values
const userData = { name: "Hamza", age: 25 };
const { address = "Haram" } = userData;

// Assigning to new Variable with value
const userData = { name: "Hamza", age: 25, address: "Bochum" };
const { address: myaddress = "Giza" } = userData;
console.log(address); // undefiend
console.log(myaddress); // Giza

// Rest Operators
const userData = { name: "Hamza", age: 25, address: "Bochum" };
const { name, ...params } = userData;

// Skipping (Not Exist in Object : because you call the object with key already, if you need to uncall not assign it)
