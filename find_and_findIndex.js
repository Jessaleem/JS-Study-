const Data = [
  {id: 1, title: 'first'},
  {id:2, title: 'second'},
  {id: 3, title: 'third'},
  {id: 4, title: 'fourth'},
]

const itemIdx = Data.findIndex(item => item.id === 2)
console.log(itemIdx);

const item = Data.find(item => item.id === 2)
console.log(item)