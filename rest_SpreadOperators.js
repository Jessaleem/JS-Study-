// SPREAD

const introduction = ['my', 'name', 'is', 'Luke', 'Skywalker']
console.log(...introduction)
const copyArr = [...introduction]
console.log(copyArr);
console.log(...copyArr);

//REST

const getSize = (...args) => {
  return args.length
}
console.log(getSize(1, 5, 10))
console.log(getSize(10, 20, 40, 50, 60))