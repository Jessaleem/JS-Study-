// let hola = (name= "Jess") => "hola " +name;
// console.log(hola())

let getName = () => "Jess"
let hello = (name = getName(), message = "hola " + name) => message;

console.log(hello())