
const hello = function() {
  const name = "Pedro";
  return function (){
    console.log(`Hello ${name}`); // keep the reference to name
  }
}

const newHello = hello();
newHello();

let arr = [1, 2, 3, 4]
 arr[10] = "hello"

console.log(arr.length)

