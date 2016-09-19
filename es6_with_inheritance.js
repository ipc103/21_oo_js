// The block of code here is the ES6 equivilent of the block below

class Pet {
  constructor(name){
    this.name = name;
  }

  sayHi(){
    console.log('Hello, welcome home!');
  }
}

class Dog extends Pet {
  bark(){
    console.log('Bark!!!');
  }
}

// function Pet (name) {
//   this.name = name;
// }
//
// Pet.prototype.sayHi = function(){
//   console.log("Hello, welcome home!");
// }
//
// function Dog (name){
//   this.name = name;
// }
//
// Dog.prototype = Object.create( Pet.prototype );
// Dog.prototype.constructor = Dog;
//
// Dog.prototype.bark = function(){
//   console.log('Bark!')
// }
