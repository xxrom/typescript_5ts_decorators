function logged(consctructionFn: Function) {
  console.log(consctructionFn);
}

@logged
class Person {
  constructor() {
    console.log('Hi');
  }
}

// Factory // разница только в том, что в factory можно передать параметры
// но вроде как нужно обратно вернуть обязательно декоратор или null
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
// plant.print(); // error print didn't exist, ts bugs
(<any>plant).print();
(<any>plant).print2();


// Method Decorator
// Property decorator
function editable(value: boolean) {
  return function(target: any, propName: string, descriptor: PropertyDescriptor) {
    descriptor.writable = value;
  }
}

function overwritable(value: boolean) {
  return function(target: any, propName: string): any {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    };

    return newDescriptor;
  }
}

class Project {
  @overwritable(false) // false ничего нельзя заменить в классе и он пустой будет
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }

  // @editable(false)
  calcBudget() {
    console.log(1000);
  }
}

const project = new Project("super project");
project.calcBudget();
project.calcBudget = function() {
  console.log(2000);
};
project.calcBudget();
console.log(project);

// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log('target: ', target);
  console.log('methodName: ', methodName);
  console.log('paramIndex: ', paramIndex);
}

class Course {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printStudentNumber(mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(10000);
    } else {
      console.log(2000);
    }
  }
}

const course = new Course('Super course');
course.printStudentNumber('anything', true);
course.printStudentNumber('anything', false);
