function logged(consctructionFn: Function) {
  console.log(consctructionFn);
}

@logged
class Person {
  constructor() {
    console.log('Hi');
  }
}

// Factory
function logging(value: boolean) {
  return value ? logged : null;
}

@logging(true)
class Car {

}

// Advanced
function printable(consturctorFn: Function) {
  consturctorFn.prototype.print = function() {
    console.log(this);
    this.test = 'test';
  }
}

function printable2(consctructionFn: Function) {
  consctructionFn.prototype.print2 = function() {

    console.log('hello print2', this);
  }
}

@printable
@printable2
class Plant {
  name = 'Green';
}

const plant = new Plant();
// plant.print(); // error print didn't exist
(<any>plant).print();
(<any>plant).print2();