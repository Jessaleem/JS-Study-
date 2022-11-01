// class Rectangle {
//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }

//   getArea() {
//     return this.length * this.width;
//   }
// }

// class Square extends Rectangle {
//   constructor(side) {
//     super(side, side);
//   }
// }

// for (let i=0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// const sum = arr.forEach(elem => console.log(elem));

// const newArr = arr.map(elem => elem*2);

// arr 
//   .map(elem => elem *2)
//   .forEach(elem => console.log(elem))

const arr = [1, 2, 3, 4]
const sum = arr.reduce((acc, elem) => acc + elem);
console.log(sum);

const input = "Jessica Paola Martinez Alee"
const response = input.toLowerCase().split('').reduce((acc, char)=> {
  acc[char]? acc[char] ++ : acc[char] = 1;
  return acc;
}, [])

console.log(response)

const anonymousFn = function() {}

function hello(name) {
  return function() {
    console.log(`Hola ${name}`)
  }
}

const helloMaria = hello("Maria")
helloMaria() // "Hola Maria"

// o más compacto
hello("Pedro")() 

const str = "Este string es inmutable"
const str2 = str.slice(5, 11)
const str3 = str2.toUpperCase()

console.log(str) 
console.log(str2) 
console.log(str3)

const obj = { a: 1, b: 2, c: 3 }
const newObj = { ...obj, c: 4, d: 5}
// newObj queda { a: 1, b: 2, c: 4, d: 5}

const person = {
  name: "Pedro",
  greet() {
    console.log(`Hola ${this.name}`)
  }
}

const hello = person.greet
hello() // "Hola undefined"

