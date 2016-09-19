function Pet (name) {
  this.petName = name;
}

Pet.prototype.sayHi = function(){
  console.log("Hello, welcome home!");
}

function Dog (name){
  this.name = name;
}

Dog.prototype = Object.create( Pet.prototype );
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(){
  console.log('Bark!')
}

Pet.prototype.sayHi = "Hello";
