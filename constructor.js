// const Persona = function(name, lastName) {
//   this.name = name;
//   this.lastName = lastName;
// }

// Persona.prototype.saluda = function(){
//   return "Hola " + this.name
// }

// const pedro = new Persona("Pedro", "Perez")

// console.log(pedro.saluda());

Array.prototype.sum = function() {
  let total = 0;

  for (let i=0; i <this.length; i++) {
    total += this[i]
  }
  return total;
}

[1, 2, 3].sum()