// const persona = {
//   nombre: "Germán",
//   apellido: "Escobar",
//   edad: 35,
//   estatura: 1.8
// }

// persona.peso= 70;

// console.log(persona)

// for (let llave in persona) {
//   if (persona.hasOwnProperty(llave)){
//     console.log(persona[llave])
//   }
// }

// const llaves = Object.keys(persona);
// console.log(llaves);

// for (let i = 0; i < llaves.length; i++) {
//   let llave = llaves[i];
//   console.log(llave)
//   console.log(persona[llave])
// }

// const recipe = {
//   "leche en polvo": "1 litro",
//   "chocolate en barra": "3 barras",
//   "azucar": "3 gramos"
// }

// console.log(recipe)

// for (let key in recipe) {
//   console.log(`agrega ${recipe[key]} de ${key}`)
// }

// recipe.mixIngredients = function() {
//   return 'Mezclando los ingredientes...'
// }

// console.log(recipe.mixIngredients())

function add(arr, num) {
  const newArr = [];

  for (let i = 0; i< arr.length; i++) {
    newArr.push(arr[i])
    console.log(newArr)
  }
  newArr.push(num)
  return newArr
}

console.log(add([1,2,3,4], 5))

