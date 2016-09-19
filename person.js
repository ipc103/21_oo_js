var kanye = {};
kanye.firstName = 'Kanye';
// kanye.firstName  'Kanye'
kanye.lastName = 'West';
// kanye.lastName  'West'
kanye.fullName = function () {
  console.log(this);
  return this.firstName + ' ' + this.lastName;
}

var jayZ = {};
jayZ.firstName = 'Sean';
jayZ.lastName = 'Carter';
jayZ.fullName = function () {
  console.log(this);
  return this.firstName + ' ' + this.lastName;
}

var beyonce = {
  firstName: 'Beyonce',
  lastName: 'Knowles',
  fullName: function () {
    console.log(this);
    return this.firstName + ' ' + this.lastName;
  }
}

// Constructors
function Person (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function(){
  return this.firstName + ' ' + this.lastName;
}

// add a method to our dog called 'Bark'
// this method should console.log 'Woof'
// once you've added it, instantiate a new dog and then execute the bark method

function fourOhfoursNew (constructor) {
  var object = {};
  object.constructor = constructor;
  object.constructor();
  return object;
}

// Inheritance
