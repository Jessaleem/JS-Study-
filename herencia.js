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