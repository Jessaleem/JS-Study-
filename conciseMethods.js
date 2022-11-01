let person = {
  name: "Jess",

sayName: function() { 
  console.log(this.name);
}
}

const persona = {
  name: "Jess",

  sayName() {
    console.log(this.name);
  }
}
