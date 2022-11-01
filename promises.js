// const fetchData = async() => {
//   try{
//     const response = await fetch('https:/swapi.dev/api/people/');

//     if (!response.ok) throw new Error(response.status);
//     const result = await response.json();
//     return result;

//   } catch (e) {
//     console.log(e)
//   }
// }


function wait(timeinMillis) {
  return new Promise(function(resolve){
    setTimeout(function() {resolve(); }, timeinMillis)
  });
}
 wait(1000)
 .then(function() {console.log("Hello after 1 sec"); });


  
