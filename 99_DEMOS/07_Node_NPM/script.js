const person = {
  fname: "George",
  lname: "of the Jungle",
  age: 24,
  isAlive: true,
  fullName: function(){
    return this.fname + " " + this.lname;
  }
}

// console.log(person.age)
console.log(person.fullName())