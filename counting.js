// function countingEs(string) {
//   let counter = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === "e"){
//       counter = counter+1
//     }
//   }
//   return counter;
// }

// console.log(countingEs("Estoy ejercitándome los miércoles y jueves") === 6);
// console.log(countingEs("Eeeeh!, que alegría verlos amigos mios")  === 6);
// console.log(countingEs("Ejemplares son las personas de este hermoso pueblo")  === 8);
// console.log(countingEs("Ahora qué?") === 0);
// console.log(countingEs("Los elefantes son enormes") === 5);

// function message(array){
//   return array.join(' ');
// }
// console.log(message(["Estoy", "aprendiendo", "Java", "Script"]));
// console.log(message(["El", "método", "join", "me", "permite", "unir", "elementos"]));
// console.log(message(["Java", "Script", "es", "muy", "útil"]));

// function generatePassword(string){
//   let password = '';

//   for (let i = 0; i < string.length; i++){
//     let char = string[i].toLowerCase();

//     if (char === " "){
//       char = '';
//     }
//     else if (char === "a") {
//       char = 4;
//     }
//     else if (char === "e") {
//       char = 3;
//     }
//     else if (char === "i") {
//       char = 1;
//     }
//     else if (char === "o") {
//       char = 0;
//     }
//     password = password + char;
//   }
//   return password;
// }
// console.log(generatePassword("hola"));
// console.log(generatePassword("esta es una prueba"));
// console.log(generatePassword(""));

function capitalize(string){
  const words = string.split(' ')
  console.log('words', words);

  for (let i = 0; i < words.length; i++){
    let chars = words[i].split('');
    console.log('chars', chars)
    chars[0] = chars[0].toUpperCase();

    words[i] = chars.join('');
    console.log('words2', words);
  }
  return words.join(' ');
}
console.log(capitalize("pedro perez"));
console.log(capitalize("make it real"))