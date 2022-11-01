const charactersArr = [
  'Witcher',
  'Harry Potter',
  'Luke SkyWalker',
  'Tony Stark',
]

const copyArr = [...charactersArr];

copyArr.splice(0, 1)
console.log(copyArr);

copyArr.splice(copyArr.length, 1, 'WonderWoman');
console.log(copyArr);

const selected = charactersArr.slice(1, 4)
console.log(selected)

console.log(charactersArr);

const selected2 = charactersArr.slice(2)
console.log(selected2);