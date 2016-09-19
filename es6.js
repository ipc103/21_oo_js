// function Animal(){
//
// }
//
// Animal.prototype.sayHello = function(){
//   console.log("I'm an animal!!!");
// }

class Animal {

  constructor(){
    console.log("Animal constructor!!!")
  }

  sayHello(){
    console.log("I'm an animal!!!");
  }

}


class Dog extends Animal {

  constructor (name) {
    super();
    this.name = name;
  }

  bark (){
    console.log('Bark!')
  }

  woof (){
    console.log('Woof!')
  }

}

// Extends
