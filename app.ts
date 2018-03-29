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